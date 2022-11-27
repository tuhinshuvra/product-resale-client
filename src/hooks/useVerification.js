import { useEffect, useState } from "react"

const useVerification = (email) => {
    const [isVerified, setVerified] = useState(false);
    console.log("isVerified:", isVerified);
    const [isVerificationLoading, setIsVerifionLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/users/verification/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setVerified(data.isVerified)
                    setIsVerifionLoading(false)
                })
        }
    }, [email])
    return [isVerified, isVerificationLoading]
}
export default useVerification;