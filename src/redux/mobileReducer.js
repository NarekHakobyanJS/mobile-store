const MOBILE_ITEM = "MOBILE_ITEM"; 
const FILTER_CATEGORY = "FILTER_CATEGORY";
const FULL_PAGE = "FULL_PAGE"

let initialState = {
    mobileStore : [
        {id : 1, key : "apple", name : "Apple iPhone 8 Plus 256GB (Red)", ram : "3 GB", memory : "256 Gb", imgUrl : "./img/iphone/1.jpg", price : "259900դր.",
        General : {
            warranty : "12 months", announcementYear : "2017",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Retina HD display with 3D Touch, widescreen LCD Multi-Touch display with IPS technology", ScreenResolution : "1920x1080", ScreenSize : "5.5 inch"
        },
        Camera : {
            FrontCamera : "7 MP", MainCamera : "12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Apple A11 Bionic (10 nm)", CPU : "A11 Bionic Embedded M11 motion coprocessor", CardSlot : "No", Ram : "3 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "202 g (7.13 oz)", Тhickness : "7.5 mm (0.30 in)" , Height : "158.4 mm (6.24 in)", Width : "78.1 mm (3.07 in)"
        }
},
        {id : 2, key : "apple", name : "iPhone 14 Pro 1TB (Deep Purple)", ram : "6 GB", memory : "1 Tb", imgUrl : "./img/iphone/2.jpg", price : "909900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "iOS"
        }, Display : {
            screenType : "LTPO Super Retina XDR OLED", ScreenResolution : "1179 x 2556", ScreenSize : "6.1 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "48 MP + 12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Apple A16 Bionic (4 nm)", CPU : "2x3.46 GHz Everest + 4x2.02 GHz Sawtooth", CardSlot : "No", Ram : "6 GB", Memory : "1TB"
    
        },
        Other : {
            Weight : "206 g", Тhickness : "7.9 mm" , Height : "147.5 mm", Width : "71.5 mm"
        }
},
        {id : 3, key : "apple", name : "iPhone 14 512GB (Blue)", ram : "6 GB", memory : "512 Gb", imgUrl : "./img/iphone/3.jpg", price : "669900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1170 x 2532", ScreenSize : "6.1 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "48 MP + 12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard", CardSlot : "No", Ram : "6 GB", Memory : "512 GB"
    
        },
        Other : {
            Weight : "172 g", Тhickness : "7.8 mm" , Height : "146.7 mm", Width : "71.5 mm"
        }
},
        {id : 4, key : "apple", name : "Apple iPhone 13 Pro Max 128GB (Sierra Blue)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/iphone/4.jpg", price : "549900դր", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps", CardSlot : "No", Ram : "6 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "240 g", Тhickness : "7.7 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 5, key : "apple", name : "iPhone 12 Pro Max 256GB (Pacific Blue)", ram : "6 GB", memory : "256 Gb", imgUrl : "./img/iphone/5.jpg", price : "549,900դր",
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "6 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "7.4 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 6, key : "apple", name : "iPhone 12 Pro Max 128GB (Graphite)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/iphone/6.jpg", price : "509900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "6 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "7.4 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 7, key : "apple", name : "iPhone 12 Mini 256GB (Red)", ram : "4 GB", memory : "256 Gb", imgUrl : "./img/iphone/7.jpg", price : "399900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1080 x 2340", ScreenSize : "5.4 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Hexa-core", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "4 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "135 g", Тhickness : "7.4 mm" , Height : "131.5 mm", Width : "64.2 mm"
        }
},
        {id : 8, key : "apple", name : "iPhone 12 Pro Max 256GB (Gold)", ram : "6 GB", memory : "256 Gb", imgUrl : "./img/iphone/8.jpg", price : "549900դր", 
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Hexa-core", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "6 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "7.4 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 9, key : "apple", name : "iPhone 11 64GB (Purple)", ram : "4 GB", memory : "64 Gb", imgUrl : "./img/iphone/9.jpg", price : "249900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2019",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Liquid Retina IPS LCD", ScreenResolution : "828 x 1792", ScreenSize : "6.1 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A13 Bionic (7 nm+)", CPU : "2x2.65 GHz Lightning + 4x1.8 GHz Thunder", CardSlot : "No", Ram : "4 GB", Memory : "64 GB"
    
        },
        Other : {
            Weight : "194 g", Тhickness : "7.4 mm" , Height : "150.9 mm", Width : "75.7 mm"
        }
},
        {id : 10, key : "apple", name : "Apple iPhone 13 Pro Max 256GB (Sierra Blue)", ram : "6 GB", memory : "256 Gb", imgUrl : "./img/iphone/10.jpg", price : "599900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Hexa-core", CPU : "2x3.22 GHz Avalanche + 4xX.X GHz Blizzard", CardSlot : "No", Ram : "6 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "240 g", Тhickness : "7.7 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 11, key : "samsung", name : "Samsung Galaxy S22 Ultra 256GB (White)", ram : "12 GB", memory : "256 Gb", imgUrl : "./img/samsung/1.jpg", price : "648900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1440 x 3088", ScreenSize : "6.8 inch"
        },
        Camera : {
            FrontCamera : "40 MP", MainCamera : "108MP + 10MP + 10MP + 12MP"
        },
        Memory : {
            Chipset : "Exynos 2200 (4 nm)", CPU : "1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510", CardSlot : "No", Ram : "12 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "8.9 mm" , Height : "163.3 mm", Width : "77.9 mm"
        }
},
        {id : 12, key : "samsung", name : "Samsung Galaxy S22+ 256GB (Pink Gold)", ram : "8 GB", memory : "256 Gb", imgUrl : "./img/samsung/2.jpg", price : "503900դր", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1080 x 2340", ScreenSize : "6.6 inch"
        },
        Camera : {
            FrontCamera : "10 MP", MainCamera : "50 MP + 10 MP + 12 MP"
        },
        Memory : {
            Chipset : "Exynos 2200 (4 nm)", CPU : "1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "195 g", Тhickness : "7.6 mm" , Height : "157.4 mm", Width : "75.8 mm"
        }
},
        {id : 13, key : "samsung", name : "Samsung Galaxy Z Flip 3 256GB (Phantom Black)", ram : "8 GB", memory : "256 Gb", imgUrl : "./img/samsung/3.jpg", price : "499900դր.",
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "Android"
        }, Display : {
            screenType : "Super AMOLED", ScreenResolution : "1080x2640", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "10 MP", MainCamera : "12 MP + 12MP"
        },
        Memory : {
            Chipset : "Octa-core", CPU : "1x2.84 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "183 g", Тhickness : "6.9 mm" , Height : "166 mm", Width : "72.2 mm"
        }
},
        {id : 14, key : "samsung", name : "Samsung Galaxy S10 Plus (Cardinal Red)", ram : "8 GB", memory : "128 Gb", imgUrl : "./img/samsung/4.jpg", price : "489900դր.",
        General : {
            warranty : "12 months", announcementYear : "2019",  OperationSystem : "Android"
        }, Display : {
            screenType : "PPI 438", ScreenResolution : "3040 x 1440", ScreenSize : "6.4 inch"
        },
        Camera : {
            FrontCamera : "10 MP + 8 MP", MainCamera : "16 MP + 12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Exynos 9820 (8 nm) - EMEA/LATAM", CPU : "Exynos 9820 (Max. 2,7 GHz + 2,3 GHz + 1,9 GHz)", CardSlot : "No", Ram : "8 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "175 g", Тhickness : "6.9 mm" , Height : "157.6 mm", Width : "74.2 mm"
        }
},
        {id : 15, key : "samsung", name : "Samsung Galaxy Z Fold 4 5G 512GB (Beige)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/samsung/5.jpg", price : "274900դր.",
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Foldable Dynamic AMOLED 2X", ScreenResolution : "1812 x 2176", ScreenSize : "7.6 inch"
        },
        Camera : {
            FrontCamera : "4MP + 10MP", MainCamera : "50 MP + 10 MP + 12 MP"
        },
        Memory : {
            Chipset : "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "12 GB", Memory : "512 GB"
    
        },
        Other : {
            Weight : "263 g", Тhickness : "6.3 mm" , Height : "155.1 mm", Width : "130.1 mm"
        }
},
        {id : 16, key : "samsung", name : "Samsung Galaxy S22+ 256GB (Pink Gold)", ram : "12 GB", memory : "512 Gb", imgUrl : "./img/samsung/6.jpg", price : "1082900դր.դր",
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1080 x 2340", ScreenSize : "6.6 inch"
        },
        Camera : {
            FrontCamera : "10MP", MainCamera : "50 MP + 10 MP + 12 MP"
        },
        Memory : {
            Chipset : "Exynos 2200 (4 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "195 g", Тhickness : "7.6 mm" , Height : "157.4 mm", Width : "75.8 mm"
        }
},
        {id : 17, key : "samsung", name : "Samsung Galaxy A52 128GB (Lavender)", ram : "4 GB", memory : "128 Gb", imgUrl : "./img/samsung/7.jpg", price : "169900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "Android"
        }, Display : {
            screenType : "Super AMOLED", ScreenResolution : "1080 x 2400", ScreenSize : "6.5 inch"
        },
        Camera : {
            FrontCamera : "32MP", MainCamera : "64MP + 12MP + 5MP + 5MP"
        },
        Memory : {
            Chipset : "Qualcomm SM7125 Snapdragon 720G (8 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "4 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "189 g", Тhickness : "7.6 mm" , Height : "159.4 mm", Width : "75.1 mm"
        }
},
        {id : 18, key : "samsung", name : "Samsung Galaxy Z Flip 4 5G 256GB (Purple)", ram : "8 GB", memory : "256 Gb", imgUrl : "./img/samsung/8.jpg", price : "599900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Foldable Dynamic AMOLED 2X", ScreenResolution : "1080x2640", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "10MP", MainCamera : "12MP + 12MP"
        },
        Memory : {
            Chipset : "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "187 g", Тhickness : "6.9 mm" , Height : "165.2 mm", Width : "71.9 mm"
        }
},
        {id : 19, key : "samsung", name : "Samsung Galaxy A32 64GB (Awesome Blue)", ram : "4 GB", memory : "64 Gb", imgUrl : "./img/samsung/9.jpg", price : "119900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "Android"
        }, Display : {
            screenType : "Super AMOLED", ScreenResolution : "1080 x 2400", ScreenSize : "6.4 inch"
        },
        Camera : {
            FrontCamera : "20MP", MainCamera : "4MP + 8MP + 5MP + 5MP"
        },
        Memory : {
            Chipset : "Mediatek MT6769V/CU Helio G80 (12 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "4 GB", Memory : "64 GB"
    
        },
        Other : {
            Weight : "184 g", Тhickness : "8.4 mm" , Height : "158.9 mm", Width : "73.6 mm"
        }
},
        {id : 20, key : "samsung", name : "Samsung Galaxy S21 FE 5G 128GB (White)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/samsung/10.jpg", price : "284900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1080 x 2400", ScreenSize : "6.4 inch"
        },
        Camera : {
            FrontCamera : "32MP", MainCamera : "12MP + 8MP + 12MP"
        },
        Memory : {
            Chipset : "Qualcomm SM8350 Snapdragon 888 5G (5 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "6 GB", Memory : "128GB"
    
        },
        Other : {
            Weight : "177 g", Тhickness : "7.9 mm" , Height : "155.7 mm", Width : "74.5 mm"
        }
},
    ],
    currentStore : [
        {id : 1, key : "apple", name : "Apple iPhone 8 Plus 256GB (Red)", ram : "3 GB", memory : "256 Gb", imgUrl : "./img/iphone/1.jpg", price : "259900դր.",
        General : {
            warranty : "12 months", announcementYear : "2017",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Retina HD display with 3D Touch, widescreen LCD Multi-Touch display with IPS technology", ScreenResolution : "1920x1080", ScreenSize : "5.5 inch"
        },
        Camera : {
            FrontCamera : "7 MP", MainCamera : "12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Apple A11 Bionic (10 nm)", CPU : "A11 Bionic Embedded M11 motion coprocessor", CardSlot : "No", Ram : "3 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "202 g (7.13 oz)", Тhickness : "7.5 mm (0.30 in)" , Height : "158.4 mm (6.24 in)", Width : "78.1 mm (3.07 in)"
        }
},
        {id : 2, key : "apple", name : "iPhone 14 Pro 1TB (Deep Purple)", ram : "6 GB", memory : "1 Tb", imgUrl : "./img/iphone/2.jpg", price : "909900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "iOS"
        }, Display : {
            screenType : "LTPO Super Retina XDR OLED", ScreenResolution : "1179 x 2556", ScreenSize : "6.1 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "48 MP + 12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Apple A16 Bionic (4 nm)", CPU : "2x3.46 GHz Everest + 4x2.02 GHz Sawtooth", CardSlot : "No", Ram : "6 GB", Memory : "1TB"
    
        },
        Other : {
            Weight : "206 g", Тhickness : "7.9 mm" , Height : "147.5 mm", Width : "71.5 mm"
        }
},
        {id : 3, key : "apple", name : "iPhone 14 512GB (Blue)", ram : "6 GB", memory : "512 Gb", imgUrl : "./img/iphone/3.jpg", price : "669900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1170 x 2532", ScreenSize : "6.1 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "48 MP + 12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard", CardSlot : "No", Ram : "6 GB", Memory : "512 GB"
    
        },
        Other : {
            Weight : "172 g", Тhickness : "7.8 mm" , Height : "146.7 mm", Width : "71.5 mm"
        }
},
        {id : 4, key : "apple", name : "Apple iPhone 13 Pro Max 128GB (Sierra Blue)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/iphone/4.jpg", price : "549900դր", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "HSPA 42.2/5.76 Mbps, LTE-A, 5G, EV-DO Rev.A 3.1 Mbps", CardSlot : "No", Ram : "6 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "240 g", Тhickness : "7.7 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 5, key : "apple", name : "iPhone 12 Pro Max 256GB (Pacific Blue)", ram : "6 GB", memory : "256 Gb", imgUrl : "./img/iphone/5.jpg", price : "549,900դր",
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "6 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "7.4 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 6, key : "apple", name : "iPhone 12 Pro Max 128GB (Graphite)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/iphone/6.jpg", price : "509900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A15 Bionic (5 nm)", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "6 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "7.4 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 7, key : "apple", name : "iPhone 12 Mini 256GB (Red)", ram : "4 GB", memory : "256 Gb", imgUrl : "./img/iphone/7.jpg", price : "399900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1080 x 2340", ScreenSize : "5.4 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Hexa-core", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "4 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "135 g", Тhickness : "7.4 mm" , Height : "131.5 mm", Width : "64.2 mm"
        }
},
        {id : 8, key : "apple", name : "iPhone 12 Pro Max 256GB (Gold)", ram : "6 GB", memory : "256 Gb", imgUrl : "./img/iphone/8.jpg", price : "549900դր", 
        General : {
            warranty : "12 months", announcementYear : "2020",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Hexa-core", CPU : "2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm", CardSlot : "No", Ram : "6 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "7.4 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 9, key : "apple", name : "iPhone 11 64GB (Purple)", ram : "4 GB", memory : "64 Gb", imgUrl : "./img/iphone/9.jpg", price : "249900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2019",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Liquid Retina IPS LCD", ScreenResolution : "828 x 1792", ScreenSize : "6.1 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP"
        },
        Memory : {
            Chipset : "Apple A13 Bionic (7 nm+)", CPU : "2x2.65 GHz Lightning + 4x1.8 GHz Thunder", CardSlot : "No", Ram : "4 GB", Memory : "64 GB"
    
        },
        Other : {
            Weight : "194 g", Тhickness : "7.4 mm" , Height : "150.9 mm", Width : "75.7 mm"
        }
},
        {id : 10, key : "apple", name : "Apple iPhone 13 Pro Max 256GB (Sierra Blue)", ram : "6 GB", memory : "256 Gb", imgUrl : "./img/iphone/10.jpg", price : "599900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "iOS"
        }, Display : {
            screenType : "Super Retina XDR OLED", ScreenResolution : "1284 x 2778", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "12 MP", MainCamera : "12MP + 12MP + 12MP"
        },
        Memory : {
            Chipset : "Hexa-core", CPU : "2x3.22 GHz Avalanche + 4xX.X GHz Blizzard", CardSlot : "No", Ram : "6 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "240 g", Тhickness : "7.7 mm" , Height : "160.8 mm", Width : "78.1 mm"
        }
},
        {id : 11, key : "samsung", name : "Samsung Galaxy S22 Ultra 256GB (White)", ram : "12 GB", memory : "256 Gb", imgUrl : "./img/samsung/1.jpg", price : "648900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1440 x 3088", ScreenSize : "6.8 inch"
        },
        Camera : {
            FrontCamera : "40 MP", MainCamera : "108MP + 10MP + 10MP + 12MP"
        },
        Memory : {
            Chipset : "Exynos 2200 (4 nm)", CPU : "1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510", CardSlot : "No", Ram : "12 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "228 g", Тhickness : "8.9 mm" , Height : "163.3 mm", Width : "77.9 mm"
        }
},
        {id : 12, key : "samsung", name : "Samsung Galaxy S22+ 256GB (Pink Gold)", ram : "8 GB", memory : "256 Gb", imgUrl : "./img/samsung/2.jpg", price : "503900դր", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1080 x 2340", ScreenSize : "6.6 inch"
        },
        Camera : {
            FrontCamera : "10 MP", MainCamera : "50 MP + 10 MP + 12 MP"
        },
        Memory : {
            Chipset : "Exynos 2200 (4 nm)", CPU : "1x2.8 GHz Cortex-X2 & 3x2.50 GHz Cortex-A710 & 4x1.8 GHz Cortex-A510", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "195 g", Тhickness : "7.6 mm" , Height : "157.4 mm", Width : "75.8 mm"
        }
},
        {id : 13, key : "samsung", name : "Samsung Galaxy Z Flip 3 256GB (Phantom Black)", ram : "8 GB", memory : "256 Gb", imgUrl : "./img/samsung/3.jpg", price : "499900դր.",
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "Android"
        }, Display : {
            screenType : "Super AMOLED", ScreenResolution : "1080x2640", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "10 MP", MainCamera : "12 MP + 12MP"
        },
        Memory : {
            Chipset : "Octa-core", CPU : "1x2.84 GHz Kryo 680 & 3x2.42 GHz Kryo 680 & 4x1.80 GHz Kryo 680", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "183 g", Тhickness : "6.9 mm" , Height : "166 mm", Width : "72.2 mm"
        }
},
        {id : 14, key : "samsung", name : "Samsung Galaxy S10 Plus (Cardinal Red)", ram : "8 GB", memory : "128 Gb", imgUrl : "./img/samsung/4.jpg", price : "489900դր.",
        General : {
            warranty : "12 months", announcementYear : "2019",  OperationSystem : "Android"
        }, Display : {
            screenType : "PPI 438", ScreenResolution : "3040 x 1440", ScreenSize : "6.4 inch"
        },
        Camera : {
            FrontCamera : "10 MP + 8 MP", MainCamera : "16 MP + 12 MP + 12 MP"
        },
        Memory : {
            Chipset : "Exynos 9820 (8 nm) - EMEA/LATAM", CPU : "Exynos 9820 (Max. 2,7 GHz + 2,3 GHz + 1,9 GHz)", CardSlot : "No", Ram : "8 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "175 g", Тhickness : "6.9 mm" , Height : "157.6 mm", Width : "74.2 mm"
        }
},
        {id : 15, key : "samsung", name : "Samsung Galaxy Z Fold 4 5G 512GB (Beige)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/samsung/5.jpg", price : "274900դր.",
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Foldable Dynamic AMOLED 2X", ScreenResolution : "1812 x 2176", ScreenSize : "7.6 inch"
        },
        Camera : {
            FrontCamera : "4MP + 10MP", MainCamera : "50 MP + 10 MP + 12 MP"
        },
        Memory : {
            Chipset : "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "12 GB", Memory : "512 GB"
    
        },
        Other : {
            Weight : "263 g", Тhickness : "6.3 mm" , Height : "155.1 mm", Width : "130.1 mm"
        }
},
        {id : 16, key : "samsung", name : "Samsung Galaxy S22+ 256GB (Pink Gold)", ram : "12 GB", memory : "512 Gb", imgUrl : "./img/samsung/6.jpg", price : "1082900դր.դր",
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1080 x 2340", ScreenSize : "6.6 inch"
        },
        Camera : {
            FrontCamera : "10MP", MainCamera : "50 MP + 10 MP + 12 MP"
        },
        Memory : {
            Chipset : "Exynos 2200 (4 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "195 g", Тhickness : "7.6 mm" , Height : "157.4 mm", Width : "75.8 mm"
        }
},
        {id : 17, key : "samsung", name : "Samsung Galaxy A52 128GB (Lavender)", ram : "4 GB", memory : "128 Gb", imgUrl : "./img/samsung/7.jpg", price : "169900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "Android"
        }, Display : {
            screenType : "Super AMOLED", ScreenResolution : "1080 x 2400", ScreenSize : "6.5 inch"
        },
        Camera : {
            FrontCamera : "32MP", MainCamera : "64MP + 12MP + 5MP + 5MP"
        },
        Memory : {
            Chipset : "Qualcomm SM7125 Snapdragon 720G (8 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "4 GB", Memory : "128 GB"
    
        },
        Other : {
            Weight : "189 g", Тhickness : "7.6 mm" , Height : "159.4 mm", Width : "75.1 mm"
        }
},
        {id : 18, key : "samsung", name : "Samsung Galaxy Z Flip 4 5G 256GB (Purple)", ram : "8 GB", memory : "256 Gb", imgUrl : "./img/samsung/8.jpg", price : "599900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Foldable Dynamic AMOLED 2X", ScreenResolution : "1080x2640", ScreenSize : "6.7 inch"
        },
        Camera : {
            FrontCamera : "10MP", MainCamera : "12MP + 12MP"
        },
        Memory : {
            Chipset : "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "8 GB", Memory : "256 GB"
    
        },
        Other : {
            Weight : "187 g", Тhickness : "6.9 mm" , Height : "165.2 mm", Width : "71.9 mm"
        }
},
        {id : 19, key : "samsung", name : "Samsung Galaxy A32 64GB (Awesome Blue)", ram : "4 GB", memory : "64 Gb", imgUrl : "./img/samsung/9.jpg", price : "119900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2021",  OperationSystem : "Android"
        }, Display : {
            screenType : "Super AMOLED", ScreenResolution : "1080 x 2400", ScreenSize : "6.4 inch"
        },
        Camera : {
            FrontCamera : "20MP", MainCamera : "4MP + 8MP + 5MP + 5MP"
        },
        Memory : {
            Chipset : "Mediatek MT6769V/CU Helio G80 (12 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "4 GB", Memory : "64 GB"
    
        },
        Other : {
            Weight : "184 g", Тhickness : "8.4 mm" , Height : "158.9 mm", Width : "73.6 mm"
        }
},
        {id : 20, key : "samsung", name : "Samsung Galaxy S21 FE 5G 128GB (White)", ram : "6 GB", memory : "128 Gb", imgUrl : "./img/samsung/10.jpg", price : "284900դր.", 
        General : {
            warranty : "12 months", announcementYear : "2022",  OperationSystem : "Android"
        }, Display : {
            screenType : "Dynamic AMOLED 2X", ScreenResolution : "1080 x 2400", ScreenSize : "6.4 inch"
        },
        Camera : {
            FrontCamera : "32MP", MainCamera : "12MP + 8MP + 12MP"
        },
        Memory : {
            Chipset : "Qualcomm SM8350 Snapdragon 888 5G (5 nm)", CPU : "1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510", CardSlot : "No", Ram : "6 GB", Memory : "128GB"
    
        },
        Other : {
            Weight : "177 g", Тhickness : "7.9 mm" , Height : "155.7 mm", Width : "74.5 mm"
        }
},
    ],
    fullPage : {}

    


}
const mobileReducer = (state = initialState, action) => {
    switch(action.type) {
        case MOBILE_ITEM :
            return {
                ...state,
            }
        case FILTER_CATEGORY : 
            return {
                ...state,
                currentStore : [...state.mobileStore.filter(el => el.key == action.key)]
            }
        case FULL_PAGE : 
            return {
                ...state,
                fullPage : action.item
            }
       
        default :
            return state
    }

}

export const filterCategoryAC = (key) => ({type : FILTER_CATEGORY, key : key})
export const fullPageAC = (item) => ({type : FULL_PAGE, item})
export default mobileReducer;