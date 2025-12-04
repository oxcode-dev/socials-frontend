const ToastNotification = () => {
    return (
        <>
            <div className="toast toast-top toast-end z-[1000]">
                <div className="alert alert-info">
                    <span>New mail arrived.</span>
                </div>
                <div className="alert alert-success">
                    <span>Message sent successfully.</span>
                </div>
            </div>
        </>
    )
}

export default ToastNotification;