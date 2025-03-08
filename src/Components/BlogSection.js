import { useState } from "react";
import Image from "next/image";
import { Box, Button, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BlogSection = ({ blogPost }) => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <div>
            {/* Blog List Section (Unchanged) */}
            <div className="grid grid-flow-row justify-center items-center gap-[10px] md:grid-flow-col md:gap-[60px]">
                {blogPost.map((post, index) => (
                    <div key={index} className="grid grid-flow-row items-center justify-center pb-[30px]">
                        <div className="pb-[15px] relative items-center justify-center overflow-hidden h-[250px] rounded-[15px]">
                            <Image src={post.img} alt="image" quality={100} fill className="object-cover" />
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="w-[291px] justify-center">
                                <p className="font-inter text-[18px] leading-[21.78px] font-bold">{post.title}</p>
                            </div>
                        </div>
                        <div className="pt-[15px] w-[291px]">
                            <p className="font-inter text-[15px] leading-[18.15px] font-normal">{post.description}</p>
                        </div>
                        <div className="pt-[15px] flex justify-center items-center">
                            <button
                                className="rounded-[15px] border-[2px] w-[260px] h-[40px] font-inter font-medium border-black bg-[#EEEEEE]"
                                onClick={() => setSelectedPost(post)}
                            >
                                View Article
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Full-Screen Modal using Material UI */}
            <Dialog fullScreen open={!!selectedPost} onClose={() => setSelectedPost(null)}>
                <DialogContent sx={{ position: "relative", textAlign: "left", p: 4 }}>
                    {/* Close Button */}
                    <IconButton sx={{ position: "absolute", top: 16, right: 16 }} onClick={() => setSelectedPost(null)}>
                        <CloseIcon />
                    </IconButton>

                    {/* Modal Content */}
                    {selectedPost && (
                        <div className="px-[100px] font-inter">
                            <Typography variant="h4" fontWeight="bold" gutterBottom className="text-center text-[60px]">
                                {selectedPost.title}
                            </Typography>
                            <Typography variant="body1">{selectedPost.content1}</Typography>
                            <div className="pb-[15px] relative items-center justify-center overflow-hidden h-[300px] rounded-[5px] my-[20px]">
                                <Image src={selectedPost.img} alt="image" quality={100} fill className="object-cover" />
                            </div>
                            <div className="grid grid-flow-row items-start font-inter">
                                <p className="font-medium">{selectedPost.date}</p><br />
                                <p>{selectedPost.content2}</p><br />
                                <p className="font-semibold">{selectedPost.content3Topic}</p><br />
                                <p>{selectedPost.content3Content}</p><br />
                                <p className="font-semibold">{selectedPost.content4Topic}</p><br />
                                <p>{selectedPost.content4Content}</p><br />
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default BlogSection;
