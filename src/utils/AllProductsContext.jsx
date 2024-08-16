import { createContext } from "react";


export const AllProductsContext = createContext();
const products = [
    {
        id : 1,
        title :"oraimo Watch 4 Plus 2.01″ HD IP68 Smart Watch",
        category : "watches",
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/06/21/801.png",
        rate : 153,
        discripe1 : "38-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "oraimo Sound APP" ,
        bestSeller : false,
        recommendation : true,
        priceNow : 890 ,
        priceBefore : 1500
    },
    {
        id : 2,
        title :"oraimo Watch 2R 1.39″ TFT IP68 Smart Watch",
        category : "watches",
        rate : 113,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/07/04/OSW-30.png",
        discripe1 : "Bluetooth Call",
        discripe2 : "7 Days Battery Life",
        discripe3 : "24-hour Health Monitoring" ,
        discripe4 : "120 Sport Modes" ,
        bestSeller : true,
        recommendation : true,
        priceNow : 1400 ,
        priceBefore : 3000,

    },
    
    {
        id : 3,
        title :"oraimo Watch ES 2 1.95″ AMOLED IP68 Smart Watch",
        category : "watches",
        rate : 13,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/07/04/OSW-30.png",
        discripe1 : "Bluetooth Call",
        discripe2 : "7 Days Battery Life",
        discripe3 : "24-hour Health Monitoring" ,
        discripe4 : "120 Sport Modes" ,
        bestSeller : false,
        priceNow : 1900 ,
        priceBefore : 3299
    },
    
    {
        id : 4,
        title :"oraimo AirBuds 4 ENC True Wireless Earbuds",
        category : "audio",
        rate : 35,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/AE/product/2024/02/06/OTW-340-680-1.png",
        discripe1 : "38-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "oraimo Sound APP" ,
        bestSeller : false,
        recommendation : true,
        priceNow : 600 ,
        priceBefore : 1200
    },
    
    {
        id : 5,
        title :"oraimo FreePods Lite ENC True Wireless Earbuds",
        category : "audio",
        rate : 35,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/otw-330/otw-330-black.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Customize Your Listening" ,
        bestSeller : true,
        priceNow : 890 ,
        priceBefore : 1500
    },
    {
        id : 6,
        title :"oraimo FreePods Lite ENC True Wireless Earbuds",
        category : "audio",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/06/27/E06DN.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Customize Your Listening" ,
        bestSeller : false,
        priceNow : 990 ,
        priceBefore : 1600
    },
    {
        id : 7,
        title :"oraimo BoomPop 2 ENC Over-Ear Wireless Headphones",
        category : "audio",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/07/04/ohp-610-black.png",
        discripe1 : "Powerful Bass",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Customize Your Listening" ,
        bestSeller : true,
        priceNow : 990 ,
        priceBefore : 2200
    },
    {
        id : 8,
        title :"oraimo FreePods 4 ANC True Wireless Earbuds",
        category : "audio",
        rate : 194,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/06/27/oeb-e105d.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "30dB ANC Noise Cancellation" ,
        discripe4 : " 4-mic ENC HD Voice in Calls" ,
        bestSeller : false,
        recommendation : true,
        priceNow : 1450 ,
        priceBefore : 2150
    },
    {
        id : 9,
        title :"oraimo Open Circlet Open-ear Headphones",
        category : "audio",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opn-40d/opn-40d.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "Truly Open-ear Comfort",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Increased Situation Awareness" ,
        bestSeller : false,
        priceNow : 3240 ,
        priceBefore : 5560
    },
    {
        id : 10,
        title :"oraimo OpenPods Open-ear Wireless Earphones",
        category : "audio",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opn-50d/opn-50d.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Find My Device" ,
        bestSeller : false,
        priceNow : 3600 ,
        priceBefore : 6250
    },
    {
        id : 11,
        title :"oraimo Shark 4 Wireless Headphones",
        category : "audio",
        rate : 17,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oeb-e30d/oeb-e30d-black.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "Dual-device Connectivity" ,
        discripe4 : "Find My Device" ,
        bestSeller : true,
        priceNow : 800 ,
        priceBefore : 1500
    },
    {
        id : 12,
        title :"oraimo Boom 30W speaker ",
        category : "audio",
        rate : 23,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/obs-75d/obs-75d.png",
        discripe1 : "6-Hr Playtime (Lights On)",
        discripe2 : "IPX5 Waterproof",
        discripe3 : "Dynamic Party Light Effects" ,
        discripe4 : "Massive Bass" ,
        recommendation : true,
        bestSeller : false,
        priceNow : 2800 ,
        priceBefore : 4000
    },
    {
        id : 13,
        title :"oraimo OpenPods Open-ear Wireless Earphones",
        category : "audio",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opn-50d/opn-50d.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Find My Device" ,
        bestSeller : true,
        priceNow : 3600 ,
        priceBefore : 6250
    },
    {
        id : 14,
        title :"oraimo Trumpet 3 HIFI Audio In-Ear Headphones",
        category : "audio",
        rate : 11,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/album/oep-e40/oep-e40.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Find My Device" ,
        bestSeller : true,
        priceNow : 170 ,
        priceBefore : 320
    },
    {
        id : 15,
        title :"oraimo Halo Airy Type-C Half In-ear Wired Headphones",
        category : "audio",
        rate : 31,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oep-650/oep-650-black.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Find My Device" ,
        bestSeller : false,
        priceNow : 160 ,
        priceBefore : 290
    },
    {
        id : 16,
        title :"oraimo Halo 4 In-Ear Wired Headphones",
        category : "audio",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/oep-e26/oep-e26-black.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Find My Device" ,
        bestSeller : false,
        priceNow : 135 ,
        priceBefore : 270
    },
    {
        id : 17,
        title :"oraimo Halo 3 Half In-Ear Wired Headphones",
        category : "audio",
        rate : 21,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/album/oep-e21p/oep-e21p-black.png",
        discripe1 : "3 40-Hr Long Playtime",
        discripe2 : "LED Screen Display",
        discripe3 : "AniFast™ Fast Charging" ,
        discripe4 : "Find My Device" ,
        bestSeller : true,
        priceNow : 135 ,
        priceBefore : 250
    },
    {
        id : 18,
        title :"oraimo Smart Trimmer Powerful & Durable Trimmer",
        category : "lifestyle",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opc-tr10/opc-tr10.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        priceNow : 990 ,
        priceBefore : 1800
    },
    {
        id : 19,
        title :"raimo Smart Clipper 2 Professional Hair Clipper",
        category : "lifestyle",
        rate : 4,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/06/27/opc-cl30.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        priceNow : 1400 ,
        priceBefore : 2300
    },
    {
        id : 20,
        title :"oraimo Smart Clipper 2 Prestige Self-Sharpening Hair Clipper",
        category : "lifestyle",
        rate : 21,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opc-cl33n/opc-cl33n.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        priceNow : 1600 ,
        priceBefore : 2500
    },
    {
        id : 21,
        title :"oraimo Smart Clipper 2 Gold Professional Hair Clipper",
        category : "lifestyle",
        rate : 14,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opc-cl30g/opc-cl30g.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        recommendation : true,
        priceNow : 1600 ,
        priceBefore : 2600
    },
    {
        id : 22,
        title :"oraimo Smart Shaver 2 Magnet 3D Dual Ultra-thin Shaver",
        category : "lifestyle",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opc-rs21n/opc-rs21n.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        priceNow : 1200 ,
        priceBefore : 2100
    },
    {
        id : 23,
        title :"oraimo Smart Trimmer 2 Long Lasting Battery Trimmer",
        category : "lifestyle",
        rate : 51,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/EG/product/2024/07/04/opc-tr12.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        priceNow : 1150 ,
        priceBefore : 1900
    },
    {
        id : 24,
        title :"oraimo Smart Clipper Plus Cordless Hair Clipper",
        category : "lifestyle",
        rate : 81,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/UG/product/2023/12/26/OCL-210.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        priceNow : 1100 ,
        priceBefore : 1800
    },
    {
        id : 25,
        title :"oraimo Smart Clipper Pro Professional Hair Clipper",
        category : "lifestyle",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/ocl-550/ocl-550.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        recommendation : true,
        priceNow : 1800 ,
        priceBefore : 3250
    },
    {
        id : 26,
        title :"oraimo Smart Straightener Hair Straightener",
        category : "lifestyle",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opc-hs1n/opc-hs1n.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        recommendation : true,
        priceNow : 1300 ,
        priceBefore : 2500
    },
    {
        id : 27,
        title :"oraimo Traveler 4 Pro 20000mAh 20W Power Bank",
        category : "power",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opb-p204dq/opb-p204dq.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        priceNow : 1320 ,
        priceBefore : 1900
    },
    {
        id : 28,
        title :"oraimo Slice Link 10000mAh 12W Power Bank",
        category : "power",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opb-p5101/opb-p5101-black.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        recommendation : true,
        bestSeller : false,
        priceNow : 650 ,
        priceBefore : 1100
    },
    {
        id : 29,
        title :"oraimo Pilot Byte 20000mAh 12W Power Bank",
        category : "power",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opb-p208dn/opb-p208dn-black.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        priceNow : 980 ,
        priceBefore : 1500
    },
    {
        id : 30,
        title :"oraimo Traveler 3 Vision 27000mAh 12W Power Bank",
        category : "power",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opb-p272dn/opb-p272dn-black.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : true,
        priceNow : 990 ,
        priceBefore : 2000
    },
    {
        id : 31,
        title :"oraimo Toast 10 PD Pro II 10000mAh 20W Power Bank",
        category : "power",
        rate : 41,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opb-p118q/opb-p118q-darkgrey.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        recommendation : true,
        priceNow : 780 ,
        priceBefore : 1350
    },
    {
        id : 32,
        title :"oraimo Toast 10 Byte II 10000mAh 12W Power Bank",
        category : "power",
        rate : 21,
        img : "https://cdn-img.oraimo.com/fit-in/600x600/NG/album/opb-p204dq/opb-p204dq.png",
        discripe1 : "Powerful & Durable Motor",
        discripe2 : "90-minute Runtime",
        discripe3 : "Smart LED Indicator" ,
        discripe4 : "Travel Lock" ,
        bestSeller : false,
        priceNow : 820 ,
        priceBefore : 1990
    },
]

export function AllProductsProvider({children}) {
    return <AllProductsContext.Provider value = {{products}}>{children}</AllProductsContext.Provider>
}