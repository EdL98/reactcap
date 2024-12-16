//i18n
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next';

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    lng:'en',
    resources:{
        en:{
            translation:{
            //header bar
            smw:"Smart Water Meter",
            //home page
            background:"Background Of Project",
            home1:"Problem statement",
            proposed_solution:"Proposed Solution",
            problem_statement:"In modern smart buildings and factories, staff are often required to manually check water meters to detect leaks and monitor water consumption. This process, which can take up to two hours, is typically confined to specific areas such as female toilets, rooftops, and basements. However, in the digital age, this manual approach is becoming increasingly outdated.",
            wm:"Water Meter",
            water_meter:"The water meter is used for measuring volume of water consumed by water-consuming entity. It is usually placed at point where water enters property, providing a means of accurate measurement of water usage for billing and monitoring purposes. Water meter is usually displayed in cubic meters or gallons.",
            challenges:"Challenges of taking Manual Readings",
            time_consume:"Time Consuming",
            error:"Prone to errors",
            location:"Located in hard-to-reach areas",
            weather:"Adverse weather conditions",
            ocr:"Optical Character Recognition Technology",
            comvis:"Open Source Computer vision",
            desocr:"OpenCV is used for image processing to increase the accuracy of the OCR program. OCR is a technology that is used to detect and convert text from images into machine-readable text. OCR software such as EasyOCR can recognise and intepret numbers displayed on meter, converting them into digital data",
            benefits:"Benefits from these technologies",  
            inacc:"Increased Accurary",
            rtdc:"Real-Time Data Collection",
            coste:"Cost Efficiency",
            auto:"Automation",
            impacc:"Improved Accessibility",
            homeh:"Home",
            waterdash:"Water Dashboard",
            health:"System Health Dashboard",
            table:"Water Reading Table",
            contact:"Contact Us",
            wrd:"Water Reading Dashboard",
            sh:"System Health",
            WaterReadingTable:"Water Reading Table",
            noinfo:"Number of information fetched",
            wwg:"We will get back to you soon",
            gitw:"Get in Touch With Us",
            name:"Your Name",
            email:"Your Email",
            message:"Your Message",
            submit:"Submit",
        },
        },
        ch:{
            translation:{
                //header bar
                smw:"智能化远程监控水表",
                //home page
                background:"项目背景",
                home1:"问题陈述",
                proposed_solution:"建议的解决方案",
                problem_statement:"在现代智能建筑和工厂中，工作人员经常需要手动检查水表以检测泄漏并监控用水量。这个过程可能需要长达两个小时，通常仅限于特定区域，例如女厕所、屋顶和地下室。然而，在数字时代，这种手动方法正变得越来越过时",
                wm:"水表",
                water_meter:"水表用于计量用水单位的用水量。它通常放置在水进入财产的地方，提供精确测量的手段用于计费和监控目的的用水量。水表通常以立方米或加仑为单位显示",
                challenges:"手动抄表的挑战",
                time_consume:"耗时",
                error:"容易出错",
                location:"位于难以到达的地区",
                weather:"恶劣的天气条件",
                ocr:"光学字符识别技术",
                comvis:"开源计算机视觉",
                desocr:"OpenCV用于图像处理，以提高OCR程序的准确性。 OCR 是一种用于检测图像中的文本并将其转换为机器可读文本的技术。 EasyOCR 等 OCR 软件可以识别并解释仪表上显示的数字，并将其转换为数字数据",
                benefits:"这些技术的好处", 
                inacc:"提高准确性",
                rtdc:"实时数据采集",
                coste:"成本效益",
                auto:"自动化",
                impacc:"改进的辅助功能",
                homeh:"网站首页界面",
                waterdash:"水资源管理仪表盘",
                health:"系统健康仪表板",
                table:"水阅读桌",
                contact:"联系我们",
                wrd:"水读数仪表板",
                sh:"系统健康状况",
                WaterReadingTable:"水阅读桌",
                noinfo:"获取的信息数量",
                wwg:"我们会尽快回复您",
                gitw:"与我们联系",
                name:"你的名字",
                email:"您的电子邮件",
                message:"您的留言",
                submit:"提交",
            },
        },
        ms:{
            translation:{
                //header bar
                smw:"Meter Air Pintar",
                //home page
                background:"Latar Belakang Projek",
                home1:"Penyataan masalah",
                proposed_solution:"Cadangan Penyelesaian",
                problem_statement:"Meter air digunakan untuk mengukur isipadu air yang digunakan oleh entiti yang menggunakan air. Ia biasanya diletakkan pada titik di mana air memasuki harta benda, menyediakan cara pengukuran tepat penggunaan air untuk tujuan pengebilan dan pemantauan. Meter air biasanya dipaparkan dalam meter padu atau gelen.",
                wm:"Meter air",
                water_meter:"Meter air digunakan untuk mengukur isipadu air yang digunakan oleh entiti yang menggunakan air. Ia biasanya diletakkan pada titik di mana air memasuki harta benda, menyediakan cara pengukuran tepat penggunaan air untuk tujuan pengebilan dan pemantauan. Meter air biasanya dipaparkan dalam meter padu atau gelen.",
                challenges:"Cabaran Pembacaan Meter Air Manual",
                time_consume:"Memakan Masa",
                error:"Terdedah kepada kesilapan",
                location:"Terletak di kawasan yang sukar dicapai",
                weather:"Keadaan cuaca buruk",
                ocr:"Teknologi Pengecaman Watak Optik",
                comvis:"Penglihatan Komputer Sumber Terbuka",
                desocr:"OpenCV digunakan untuk pemprosesan imej untuk meningkatkan ketepatan program OCR. OCR ialah teknologi yang digunakan untuk mengesan dan menukar teks daripada imej kepada teks yang boleh dibaca mesin. Perisian EasyOCR seperti OCR boleh mengecam dan nombor intepret dipaparkan pada meter, menukarkannya kepada data digital",
                benefits:"Faedah daripada teknologi ini", 
                inacc:"Bertambah Tepat",
                rtdc:"Pengumpulan Data Masa Nyata",
                coste:"Kecekapan Kos",
                auto:"Automasi",
                impacc:"Kebolehcapaian yang dipertingkatkan",
                homeh:"Rumah",
                waterdash:"Papan Pemuka Air",
                health:"Papan Kesihatan",
                table:"Jadual Bacaan Air",
                contact:"Hubungi Kami",
                wrd:"Papan Pemuka Bacaan Air",
                sh:"Kesihatan Sistem",
                WaterReadingTable:"Jadual Bacaan Air",
                noinfo:"Bilangan maklumat yang diambil",
                wwg:"Kami akan segera hubungi",
                gitw:"Hubungi Kami",
                name:"Nama awak",
                email:"e-mel anda",
                message:"Mesej Anda",
                submit:"Hantar",
            },
        },
        ta:{
            translation:{
                //header bar
                smw:"தமிழ் மொழி",
                //home page
                background:"திட்டத்தின் பின்னணி",
                home1:"பிரச்சனை அறிக்கை",
                proposed_solution:"முன்மொழியப்பட்ட தீர்வு",
                problem_statement:"நீர் நுகர்வு நிறுவனம் உட்கொள்ளும் நீரின் அளவை அளவிடுவதற்கு நீர் மீட்டர் பயன்படுத்தப்படுகிறது. பில்லிங் மற்றும் கண்காணிப்பு நோக்கங்களுக்காக நீர் பயன்பாட்டை துல்லியமாக அளவிடுவதற்கான வழிமுறையை வழங்கும், சொத்துக்குள் தண்ணீர் நுழையும் இடத்தில் இது வழக்கமாக வைக்கப்படுகிறது. நீர் மீட்டர் பொதுவாக கன மீட்டர் அல்லது கேலன்களில் காட்டப்படும்.",
                wm:"தண்ணீர் மீட்டர்",
                water_meter:"நீர் நுகர்வை அளவிட நீர் மீட்டர் பயன்படுத்தப்படுகிறது. இது பில்லிங் மற்றும் கண்காணிப்புக்கு துல்லியமான அளவீட்டை வழங்குகிறது மற்றும் சொத்துக்குள் நீர் நுழையும் இடத்தில் பொருத்தப்படுகிறது. அளவீடு கன மீட்டர் அல்லது கேலன்களில் காணப்படும்.",
                challenges:"கைமுறையாக நீர் மீட்டர் வாசிப்பதில் உள்ள சவால்கள்",
                time_consume:"நேரம் எடுக்கும்",
                error:"பிழைகள் ஏற்பட வாய்ப்புள்ளது",
                location:"அணுக முடியாத பகுதிகளில் அமைந்துள்ளது",
                weather:"பாதகமான வானிலை",
                ocr:"தமிழ் ஓ.சி.ஆர்",
                comvis:"கணினி பார்வை",
                desocr:"OCR துல்லியத்தை உயர்த்த OpenCV பயன்படுத்தப்படுகிறது. EasyOCR போன்ற OCR மென்பொருள், படங்களில் இருந்து எண்களைப் படித்து, டிஜிட்டல் தரவுகளாக மாற்றுகிறது.",
                benefits:"தொழில்நுட்ப நன்மைகள்", 
                inacc:"அதிகரித்த துல்லியம்",
                rtdc:"நிகழ்நேர தரவு சேகரிப்பு",
                coste:"செலவு திறன்",
                auto:"ஆட்டோமேஷன்",
                impacc:"மேம்படுத்தப்பட்ட அணுகல்தன்மை",
                homeh:"வீடு",
                waterdash:"நீர்ப் பலகை",
                health:"ஆரோக்கிய பலகை",
                table:"நீர் வாசிப்பு அட்டவணை",
                contact:"தொடர்பு",
                wrd:"நீர் வாசிப்பு டாஷ்போர்டு",
                sh:"கணினி ஆரோக்கியம்",
                WaterReadingTable:"நீர் வாசிப்பு அட்டவணை",
                noinfo:"பெறப்பட்ட தகவல்களின் எண்ணிக்கை",
                wwg:"விரைவில் வருகிறோம்",
                gitw:"தொடர்பு கொள்ள",
                name:"உங்கள் பெயர்",
                email:"உங்கள் மின்னஞ்சல்",
                message:"உங்கள் செய்தி",
                submit:"சமர்ப்பிக்கவும்",
            },
        
        },
        jpn:{
            translation:{
                //header bar
                smw:"スマート水道メーター",
                //home page
                background:"プロジェクトの背景",
                home1:"問題文",
                proposed_solution:"提案されたソリューション",
                problem_statement:"最新のスマートビルや工場では、漏水を検出し、水の消費量を監視するために、スタッフが水道メーターを手動でチェックすることが求められることがよくあります。このプロセスは最大 2 時間かかる場合があり、通常は女性用トイレ、屋上、地下室などの特定のエリアに限定されます。しかし、デジタル時代では、この手動のアプローチはますます時代遅れになりつつあります。",
                wm:"水道メーター",
                water_meter:"水道メーターは、水を使用する主体が使用する水の量を測定するために使用されます。通常、水が敷地内に入る場所に設置され、請求や監視の目的で水の使用量を正確に測定する手段を提供します。水道メーターは通常立方メートルまたはガロンで表示されます。",
                challenges:"手動による水道メーター検針の課題",
                time_consume:"時間がかかる",
                error:"エラーが発生しやすい",
                location:"手の届きにくい場所にある",
                weather:"悪天候",
                ocr:"光学式文字認識技術",
                comvis:"オープンソースのコンピュータビジョン",
                desocr:"OpenCV は、OCR プログラムの精度を高めるための画像処理に使用されます。 OCR は、画像からテキストを検出し、機械可読テキストに変換するために使用されるテクノロジーです。 EasyOCR などの OCR ソフトウェアは、メーターに表示された数値を認識して解釈し、デジタル データに変換できます",
                benefits:"これらのテクノロジーのメリット", 
                inacc:"精度の向上",
                rtdc:"リアルタイムのデータ収集",
                coste:"コスト効率",
                auto:"オートメーション",
                impacc:"アクセシビリティの向上",
                homeh:"家",
                waterdash:"水ダッシュボード",
                health:"システム健全性ダッシュボード",
                table:"水読書表",
                contact:"お問い合わせ",
                wrd:"水の読み取りダッシュボード",
                sh:"システムの健全性",
                WaterReadingTable:"水読書表",
                noinfo:"取得した情報の数",
                wwg:"すぐにご連絡いたします",
                gitw:"お問い合わせください",
                name:"あなたの名前",
                email:"あなたのメールアドレス",
                message:"あなたのメッセージ",
                submit:"提出する",
            }
        }

    }
})