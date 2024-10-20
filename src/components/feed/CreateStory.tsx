"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary'
import { createStory } from '@/lib/actions'
import { Button } from '../ui/button'
import { useFormStatus } from 'react-dom'
import ProcessingButton from '../rightMenu/ProcessingButton'

const CreateStory = ({ user }: { user: any }) => {
    const [img, setImg] = useState<any>("");
    const { pending } = useFormStatus();

    return (
        <div className=" flex flex-col gap-2 justify-center items-center">

            <CldUploadWidget
                uploadPreset="Inspace"
                onSuccess={(result) => setImg(result.info)
                }
            >
                {({ open }) => {
                    return (





                        <div onClick={() => open()} className=" relative size-[45px] md:size-[80px] flex justify-center items-center  rounded-full">
                            <Image
                                // Nextjs does not allow to use external images to use them first
                                // add them in next.config.mjs
                                src={user.picture!||"/noAvatar.png"}
                                alt=""
                                fill
                                className=" rounded-full ring-2 object-cover ring-black  "
                            />
                            <div className=" bg-black bg-opacity-50 absolute size-[45px] md:size-[80px] flex justify-center items-center ring-4 ring-blue-500 rounded-full">

                                <Image
                                    // Nextjs does not allow to use external images to use them first
                                    // add them in next.config.mjs
                                    src="/Stories.png"
                                    alt=""
                                    fill
                                    className=" rounded-full ring-2 object-cover ring-black  "
                                />
                            </div>
                        </div>


                    );
                }}
            </CldUploadWidget >

            <form action={async () => {

                await createStory(img.secure_url);
                setImg(null);

            }}>
                {img ? <ProcessingButton process='Send' processing='Sending'/> : <span className="font-medium">Create story</span>}
                

            </form>



        </div >



    )
}

export default CreateStory