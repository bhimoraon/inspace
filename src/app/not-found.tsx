import Image from "next/image";
import React from "react";

function notfound() {
	return (
		<div className=" flex justify-center items-center h-screen  ">
			<div className="size-[200px] sm:size-[400px] xl:size-[600px] relative">
				<Image src="/notfound.png" alt="" fill/>
			</div>
		</div>
	);
}

export default notfound;
