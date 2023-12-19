import Image from "next/image";
import Link from "next/link";

const NoConnection = () => {
    return (
        <div className="pt-16 bg-[#fff] h-screen" >
            <div className="px-[40px] mt-3">
                <h3 className="font-bold text-[30px] text-[#525252] text-center">No Internet Connection.</h3>
            </div>
        </div>
    )
}
export default NoConnection