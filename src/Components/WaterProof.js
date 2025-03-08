import { useState } from "react";
import Image from "next/image";
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Waterproofing = ({ waterProof }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <>
            <div id="service">
                <p className="font-poppins text-[24px] font-semibold text-center p-[10px] py-[25px] sm:font-semibold sm:ml-[100px] sm:text-[26px] pt-[40px] pb-[40px]">Types of <span className="text-[#F1AC51]">Waterproofing</span></p>
                <div className="grid grid-flow-row items-center justify-center gap-[20px] md:grid-flow-col md:gap-[40px] pb-[40px]">
                    {waterProof.map((data, index) => (
                        <div key={index}>
                            <div className="bg-[#EEEEEE] h-[335px] w-[291px] rounded-[9px] grid grid-rows-5 justify-center pt-[20px]">
                                <div className="row-span-3">
                                    <Image src={data.icon} alt="tow" height={195} width={266} quality={100} />
                                </div>
                                <div className="row-span-2 p-[20px] pt-[25px]">
                                    <p className="font-poppins font-semibold text-[17px] leading-[25.5px] pb-[5px]">{data.name}</p>
                                    <p className="pl-[16px] font-poppins text-[15px] leading-[22.5px] text-[#505050] pb-[5px]">{data.bestFor}</p>
                                    <button className="pl-[16px] font-poppins text-[17px] leading-[25.5px] text-[#F1AC51] pt-[10px]" onClick={() => setSelectedPost(data)}>View Details &gt; </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Popup Modal */}
            <Dialog open={!!selectedPost} onClose={() => setSelectedPost(null)}>
                <DialogContent sx={{ position: "relative", textAlign: "left", p: 0 }}>
                    {/* Close Button */}
                    <IconButton sx={{ position: "absolute", top: 16, right: 16 }} onClick={() => setSelectedPost(null)}>
                        <CloseIcon />
                    </IconButton>

                    {/* Modal Content */}
                    {selectedPost && (
    <div className="font-inter grid grid-flow-col gap-5 items-center">
        {/* Image Container */}
        <div className="pb-[15px] relative overflow-hidden h-[300px] w-[250px] rounded-[5px]">
            <Image src={selectedPost.icon} alt="image" quality={100} fill className="object-cover" />
        </div>

        {/* Text Content */}
        <div className="grid grid-flow-row gap-5">
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: "center", fontSize: "60px" }}>
                {selectedPost.name}
            </Typography>
            <Typography variant="body1">{selectedPost.cost}</Typography>

            {/* Description Section */}
            <div className="grid grid-flow-row items-start font-inter gap-2">
                <p className="text-[#6F6F6F] font-semibold">
                    Description: <span className="font-normal">{selectedPost.description}</span>
                </p>
                <p className="text-[#6F6F6F] font-semibold">
                    Best for: <span className="font-normal">{selectedPost.descriptionBestfor}</span>
                </p>
            </div>

            {/* Button - Ensure Padding & Visibility */}
            <button className="bg-[#0D5CF1] text-white font-semibold rounded-[10px] py-2 px-4 w-full">
                Get Waterproofed
            </button>
        </div>
    </div>
)}

                </DialogContent>
            </Dialog>
        </>
    )
}

export default Waterproofing;