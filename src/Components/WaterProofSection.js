import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, Typography, IconButton, Box, Slide } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Transition = (props) => <Slide direction="up" {...props} />;

const WaterproofingSection = ({ tWaterProof }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div id="service">
            {/* Section Title */}
            <p className="font-poppins text-[24px] font-semibold text-center p-[10px] py-[25px] sm:font-semibold sm:text-start sm:ml-[100px] sm:text-[26px]">
                Types of <span className="text-[#F1AC51] sm:text-black">Waterproofing</span>
            </p>

            {/* Waterproofing Cards */}
            <div className="grid grid-flow-row items-center justify-center gap-[20px] md:grid-flow-col md:gap-[40px]">
                {tWaterProof.map((data, index) => (
                    <div 
                        key={index} 
                        className="bg-[#EEEEEE] h-[335px] w-[291px] rounded-[9px] grid grid-rows-5 justify-center pt-[20px]"
                    >
                        <div className="row-span-3">
                            <Image src={data.icon} alt="tow" height={195} width={266} quality={100} />
                        </div>
                        <div className="row-span-2 p-[20px] pt-[25px]">
                            <p className="font-poppins font-semibold text-[17px] leading-[25.5px] pb-[5px]">{data.name}</p>
                            <p className="pl-[16px] font-poppins text-[15px] leading-[22.5px] text-[#505050] pb-[5px]">{data.bestFor}</p>
                            
                            {/* View Details Button (Opens Modal) */}
                            <a
                                className="pl-[16px] font-poppins text-[17px] leading-[25.5px] text-[#F1AC51] sm:text-[#5033E2] cursor-pointer"
                                onClick={() => setSelectedItem(data)}
                            >
                                View Details &gt;
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup Modal */}
            <Dialog
                open={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                TransitionComponent={Transition}
                sx={{ "& .MuiPaper-root": { width: "50vw", height: "50vh", maxWidth: "none", borderRadius: 3 } }}
            >
                <DialogContent sx={{ position: "relative", textAlign: "center", p: 4 }}>
                    
                    {/* Close Button */}
                    <IconButton 
                        sx={{ position: "absolute", top: 10, right: 10, color: "#555", "&:hover": { color: "black" } }} 
                        onClick={() => setSelectedItem(null)}
                    >
                        <CloseIcon />
                    </IconButton>

                    {/* Modal Content */}
                    {selectedItem && (
                        <>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                {selectedItem.name}
                            </Typography>
                            <Box display="flex" justifyContent="center" my={2}>
                                <Image src={selectedItem.icon} alt="image" width={300} height={200} style={{ borderRadius: 8 }} />
                            </Box>
                            <Typography variant="body1">{selectedItem.description}</Typography>
                        </>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default WaterproofingSection;
