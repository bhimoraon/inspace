"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import { User } from '@prisma/client'
import { CldUploadWidget } from 'next-cloudinary'
import { createStory } from '@/lib/actions'
import { Button } from '../ui/button'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/alert-dialog'

const CreateStory = ({ user }: { user: any }) => {
    const [img, setImg] = useState<any>("");




    return (<>


        <CldUploadWidget
            uploadPreset="Inspace"
            onSuccess={(result) => {

                setImg(result.info)
                console.log(img.secure_url)
            }



            }
        >
            {({ open }) => {
                return (

                    <div onClick={() => open()} className=" flex flex-col gap-2 justify-center items-center">



                        <div className=" relative size-[45px] md:size-[80px] flex justify-center items-center  rounded-full">
                            <Image
                                // Nextjs does not allow to use external images to use them first
                                // add them in next.config.mjs
                                src={user.picture!}
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
                        <span className="font-medium">Create story</span>
                    </div>

                );
            }}
        </CldUploadWidget >
    </>



    )
}

export default CreateStory