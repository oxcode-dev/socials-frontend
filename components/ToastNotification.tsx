'use client';

import { useToastContext } from "@/contexts/ToastContext";

const ToastNotification = () => {
    const { toast } = useToastContext()
    return (
        <>
            { toast.show ? (
                <div className="toast toast-top toast-end z-[1000]">
                    <div className="alert alert-info">
                        <span>New mail arrived.</span>
                    </div>
                    <div className="alert alert-success">
                        <span>Message sent successfully.</span>
                    </div>
                </div>
            ) : null }
        </>
    )
}

export default ToastNotification;