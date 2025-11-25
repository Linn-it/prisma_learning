import { ArrowUpRight, CirclePlay } from "lucide-react";
import * as motion from "motion/react-client"
import { Button } from "./ui/button";

export default function HeroSection() {
    return (
        <>
            <section className="max-w-7xl mx-auto min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity:1, y:0}}
                        transition={{duration: 0.8, delay: 0.3}}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">Growing That <span className="text-primary italic">Planventory</span> </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground mt-5">Explore a collection of plants ready to grow and plants, development flow with easy-to-implement examples.</p>
                        <motion.div
                            initial={{opacity: 0, y:20}}
                            animate={{opacity:1, y:0}}
                            transition={{duration: 0.8, delay: 0.5}}
                            className="mt-5">
                            <Button className="cursor-pointer mr-5 ">Get Started <ArrowUpRight/></Button>
                            <Button variant='outline' className="text-primary cursor-pointer hover:text-primary/60"><CirclePlay/> Watch Demo</Button>

                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}