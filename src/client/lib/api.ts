import { useEffect } from "react";

type Request = {
    action: string;
    payload?: any;
    transactionId?: number;
};

export function send(request: Request) {
    parent.postMessage({ pluginMessage: request }, "*");
}

export function get(request: Request) {

    return new Promise<any>((resolve, reject) => {

        const transactionId = performance.now();
        send({ ...request, transactionId });

        const callback = ({ data: { pluginMessage } }: { data: { action: string, pluginMessage: any } }): any => {
            if (!pluginMessage.action) {
                return reject('No action has been set in API, make sure to return an action that is equal to the emitted message');
            }

            if (pluginMessage.action === request.action && pluginMessage.transactionId === transactionId) {
                resolve(pluginMessage);
                return window.removeEventListener("message", callback);
            }
        };

        window.addEventListener("message", callback);

    });


}




export function listen(callback: any) {

    interface ICallback {
        data: {
            pluginMessage: any;
        };
    }

    const handleCallback = ({ data: { pluginMessage } }: ICallback) => callback(pluginMessage);

    useEffect(() => {
        window.addEventListener("message", handleCallback);

        return () => {
            window.removeEventListener("message", handleCallback);
        }
    }, [callback]);
}

