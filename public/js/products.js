const products = [
    {
        id: "000001",
        category: "apple_tablets",
        attributes: {
            productName: "iPad Pro",
            description: "orginal",
            price: "200",
            photo: [
                "images/tablets/ipad_pro/1.png",
                "images/tablets/ipad_pro/2.png",
                "images/tablets/ipad_pro/3.png",
                "images/tablets/ipad_pro/4.png",
                "images/tablets/ipad_pro/5.png",
                "images/tablets/ipad_pro/6.png"
            ]
        },
        details:{
            "OS":"IOS",
            "Display":"2420x1668, 11 inch, OLED",
            "Build material":"metal",
            "Interfaces":"USB type-C",
            "Wireless interfaces":"Wi-Fi, Bluetooth 5.3",
            "RAM":"8 GB",
            "Processor": "M4(10 cores), 4.05 GHz",
            "Memory":"256 GB",
            "Camera":"Main camera rez. - 12 MP, Dual camera, Wide lens; Front camera rez. - 12 MP"
        }
    },
    {
        id:"000002",
        category: "apple_tablets",
        attributes: {
            productName: "iPad Air",
            description: "original",
            price: "100",
            photo: [
                "images/tablets/ipad_air/1.png",
                "images/tablets/ipad_air/2.png",
                "images/tablets/ipad_air/3.png"
            ]
        },
        details:{
            "OS":"IOS",
            "Display":"2360x1640, 10.9 inch, IPS",
            "Build material":"metal",
            "Interfaces":"USB type-C",
            "Wireless interfaces":"Wi-Fi, Bluetooth 5.2",
            "RAM":"8 GB",
            "Processor": "A14 Bionic(6 cores), 2.66 GHz",
            "Memory":"64 GB",
            "Camera":"Main camera rez. - 12 MP, Front camera rez. - 12 MP"
        }
    },
    {
        id:"000003",
        category: "apple_tablets",
        attributes: {
            productName: "iPad Mini",
            description: "original",
            price: "140",
            photo: [
                "images/tablets/ipad_mini/1.png",
                "images/tablets/ipad_mini/2.png",
                "images/tablets/ipad_mini/3.png",
                "images/tablets/ipad_mini/4.png",
                "images/tablets/ipad_mini/5.png",
                "images/tablets/ipad_mini/6.png",
                "images/tablets/ipad_mini/7.png"
            ]
        },
        details:{ 
            "OS":"IOS",
            "Display":"2266x1488, 11 inch, OLED",
            
            "Build material":"metal",
            "Interfaces":"USB type-C",
            "Wireless interfaces":"Wi-Fi, Bluetooth 5.3",
            "RAM":"8 GB",
            "Processor": "A17 Pro(6 cores), 3.6 GHz",
            "Memory":"128 GB",
            "Camera":"Main camera rez. - 12 MP,  Wide lens; Front camera rez. - 12 MP"
        }
    },
    {
        id:"000004",
        category: "apple_laptops",
        attributes: {
            productName: "macBook Pro",
            description: "original",
            price: "320",
            photo: [
                "images/laptops/macBookPro/1.png",
                "images/laptops/macBookPro/2.png",
                "images/laptops/macBookPro/3.png",
                "images/laptops/macBookPro/4.png",
                "images/laptops/macBookPro/5.png"
            ]
        },
        details: {
            "OS": "macOS Big Sur",
            "Display": "2560x1600, 13.3 inch, Retina",
            "Build material": "Aluminum",
            "Interfaces": "Thunderbolt 3",
            "Wireless interfaces": "Wi-Fi 5, Bluetooth 5.0",
            "RAM": "8 GB / 16 GB",
            "Processor": "Apple M1 (8 cores), 3.2 GHz",
            "Memory": "256 GB / 512 GB",
            "Camera": "720p FaceTime HD camera"
        }
    },
    {
        id: "000005",
        category: "apple_laptops",
        attributes: {
            productName: "macBook Air",
            description: "original",
            price: "320",
            photo: [
                "images/laptops/macBookAir/1.png",
                "images/laptops/macBookAir/2.png",
                "images/laptops/macBookAir/3.png",
                "images/laptops/macBookAir/4.png",
                "images/laptops/macBookAir/5.png",
                "images/laptops/macBookAir/6.png"
            ]
        },
        details:{
            "OS": "macOS Monterey",
            "Display": "2560x1664, 13.6 inch, Liquid Retina",
            "Build material": "Aluminum",
            "Interfaces": "Thunderbolt 3, MagSafe 3",
            "Wireless interfaces": "Wi-Fi 6, Bluetooth 5.0",
            "RAM": "8 GB / 16 GB / 24 GB",
            "Processor": "Apple M2 (8 cores), 3.49 GHz",
            "Memory": "256 GB / 512 GB / 1 TB / 2 TB",
            "Camera": "720p FaceTime HD camera"
        }
    },
    {
        id: "000006",
        category: "msi_laptops",
        attributes: {
            productName: "MSI GF63 Thin",
            description: "original",
            price: "240",
            photo: [
                "images/laptops/msi-gf63-thin/1.png",
                "images/laptops/msi-gf63-thin/2.png",
                "images/laptops/msi-gf63-thin/3.png",
                "images/laptops/msi-gf63-thin/4.png",
                "images/laptops/msi-gf63-thin/5.png"
            ]
        },
        details: {
            "OS": "Windows 10 / Windows 11",
            "Display": "1920x1080, 15.6 inch, IPS-Level",
            "Build material": "Plastic / Metal",
            "Interfaces": "USB Type-C, USB 3.2, HDMI, Ethernet, Audio Jack",
            "Wireless interfaces": "Wi-Fi 6, Bluetooth 5.1",
            "RAM": "8 GB / 16 GB",
            "Processor": "Intel Core i5 / i7 (10th or 11th Gen), up to 4.5 GHz",
            "Memory": "256 GB / 512 GB / 1 TB SSD",
            "Graphics": "NVIDIA GeForce GTX 1650 / GTX 1660 Ti / RTX 3050",
            "Camera": "720p HD Webcam"
        }
    },
    {
        id:"000007",
        category: "msi_laptops",
        attributes: {
            productName: "MSI GF66 Katana",
            description: "clean",
            price: "280",
            photo: [
                "images/laptops/msi-gf66-katana/1.png",
                "images/laptops/msi-gf66-katana/2.png",
                "images/laptops/msi-gf66-katana/3.png",
                "images/laptops/msi-gf66-katana/4.png"
            ]
        },
        details: {
            "OS": "Windows 10 / Windows 11",
            "Display": "1920x1080, 15.6 inch, IPS-Level, 144Hz",
            "Build material": "Plastic / Metal",
            "Interfaces": "USB Type-C, USB 3.2, HDMI, Ethernet, Audio Jack",
            "Wireless interfaces": "Wi-Fi 6, Bluetooth 5.1",
            "RAM": "8 GB / 16 GB / 32 GB",
            "Processor": "Intel Core i5 / i7 (11th Gen), up to 4.6 GHz",
            "Memory": "512 GB / 1 TB SSD",
            "Graphics": "NVIDIA GeForce RTX 3050 / RTX 3060",
            "Camera": "720p HD Webcam"
        }
    },
    {
        id:"000008",
        category: "apple_smartphones",
        attributes: {
            productName: "iPhone 15",
            description: "original",
            price: "100",
            photo: [
                "images/phones/iPhone15/1.png",
                "images/phones/iPhone15/2.png",
                "images/phones/iPhone15/3.png",
                "images/phones/iPhone15/4.png",
                "images/phones/iPhone15/5.png"
            ]
        },
        details:{
            "OS": "iOS",
            "Display": "2556x1179, 6.1 inch, Super Retina XDR",
            "Build material": "Aluminum and Ceramic Shield",
            "Interfaces": "Lightning",
            "Wireless interfaces": "Wi-Fi 6, Bluetooth 5.3",
            "RAM": "6 GB",
            "Processor": "A16 Bionic (6 cores), 3.1 GHz",
            "Memory": "128 GB / 256 GB / 512 GB / 1 TB",
            "Camera": "Main: 48 MP Wide; Ultra Wide: 12 MP; Front: 12 MP"
        }
    },
    {
        id: "000009",
        category: "apple_smartphones",
        attributes: {
            productName: "iPhone 13",
            description: "original",
            price: "200",
            photo: [
                "images/phones/iPhone13/1.png",
                "images/phones/iPhone13/2.png",
                "images/phones/iPhone13/3.png",
                "images/phones/iPhone13/4.png",
                "images/phones/iPhone13/5.png",
                "images/phones/iPhone13/6.png"
            ]
        },
        details:{
            "OS": "iOS",
            "Display": "2532x1170, 6.1 inch, Super Retina XDR",
            "Build material": "Aluminum and Ceramic Shield",
            "Interfaces": "Lightning",
            "Wireless interfaces": "Wi-Fi 6, Bluetooth 5.0",
            "RAM": "4 GB",
            "Processor": "A15 Bionic (6 cores), 3.1 GHz",
            "Memory": "128 GB / 256 GB / 512 GB",
            "Camera": "Main: 12 MP Wide; 12 MP Ultra Wide; Front: 12 MP"
        }
    },
    {
        id:"000010",
        category: "samsung_smartphones",
        attributes: {
            productName: "Samsung Galaxy Note20 Ultra",
            description: "original",
            price: "300",
            photo: [
                "images/phones/samsung-galaxy-note20-ultra/1.png",
                "images/phones/samsung-galaxy-note20-ultra/2.png",
                "images/phones/samsung-galaxy-note20-ultra/3.png",
                "images/phones/samsung-galaxy-note20-ultra/4.png"
            ]
        },
        details:{
            "OS": "Android 10, One UI 2.5",
            "Display": "3088x1440, 6.9 inch, Dynamic AMOLED 2X",
            "Build material": "Glass front (Gorilla Glass Victus), Glass back (Gorilla Glass Victus), Aluminum frame",
            "Interfaces": "USB Type-C",
            "Wireless interfaces": "Wi-Fi 6, Bluetooth 5.0",
            "RAM": "8 GB / 12 GB",
            "Processor": "Exynos 990 (7 nm) / Snapdragon 865+ (7 nm)",
            "Memory": "128 GB / 256 GB / 512 GB",
            "Camera": "Main camera rez. - 108 MP + 12 MP + 12 MP; Front camera rez. - 10 MP"
        }
    },
    {
        id: "000011",
        category: "latops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000012",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000013",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000014",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000015",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000016",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000017",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000018",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000019",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000020",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000021",
        category: "apple_tablets",
        attributes: {
            productName: "Ipad Pro",
            description: "orginal",
            price: "200",
            photo: [
                "images/tablets/ipad_pro/1.png",
                "images/tablets/ipad_pro/2.png",
                "images/tablets/ipad_pro/3.png",
                "images/tablets/ipad_pro/4.png",
                "images/tablets/ipad_pro/5.png",
                "images/tablets/ipad_pro/6.png"
            ]
        },
        details:{}
    },
    {
        id:"000022",
        category: "apple_tablets",
        attributes: {
            productName: "Ipad Air",
            description: "original",
            price: "100",
            photo: [
                "images/tablets/ipad_air/1.png",
                "images/tablets/ipad_air/2.png",
                "images/tablets/ipad_air/3.png"
            ]
        },
        details:{}
    },
    {
        id:"000023",
        category: "apple_tablets",
        attributes: {
            productName: "Ipad Mini",
            description: "original",
            price: "140",
            photo: [
                "images/tablets/ipad_mini/1.png",
                "images/tablets/ipad_mini/2.png",
                "images/tablets/ipad_mini/3.png",
                "images/tablets/ipad_mini/4.png",
                "images/tablets/ipad_mini/5.png",
                "images/tablets/ipad_mini/6.png",
                "images/tablets/ipad_mini/7.png"
            ]
        },
        details:{}
    },
    {
        id:"000024",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000025",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000026",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000027",
        category: "tablets",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000028",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000029",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000030",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000031",
        category: "latops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000032",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000033",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000034",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000035",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000036",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000037",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000038",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    },
    {
        id: "000039",
        category: "laptops",
        attributes: {
            productName: "Mac",
            description: "avava",
            price: "200",
            photo: [
                "images/salesAndDiscounts/mac.jpg"
            ]
        },
        details:{}
    },
    {
        id:"000040",
        category: "cleaners",
        attributes: {
            productName: "SmartCleaner",
            description: "clean",
            price: "100",
            photo: [
                "images/salesAndDiscounts/smart.jpg"
            ]
        },
        details:{}
    }
];
export default products