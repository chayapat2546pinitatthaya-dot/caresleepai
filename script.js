document.addEventListener('DOMContentLoaded', () => {
    // Translation Data
    const translations = {
        en: {
            nav_dashboard: "Dashboard",
            nav_coach: "AI Sleep Coach",
            nav_analysis: "Analysis",
            nav_history: "History",
            user_status: "Pro Account",
            sync_btn: "Sync Watch",
            hero_title: "Good morning, Thanaphong!",
            hero_desc_good: "Your sleep quality was <span class='highlight' style='color:#10b981;'>84%</span> last night. You're recovered and ready to go.",
            hero_desc_bad: "Your sleep quality was <span class='highlight' style='color:#f43f5e;'>45%</span> last night. You might feel tired today.",
            stat_duration: "Sleep Duration",
            stat_duration_meta_good: "+42m from yesterday",
            stat_duration_meta_bad: "-1h 30m from yesterday",
            stat_hr: "Avg Heart Rate",
            stat_hr_meta_good: "Normal Range",
            stat_hr_meta_bad: "High resting HR",
            stat_stress: "Stress Level",
            stat_stress_meta_good: "Low Stress",
            stat_stress_meta_bad: "High Stress",
            stat_deep: "Deep Sleep",
            stat_deep_meta_good: "Good Quality",
            stat_deep_meta_bad: "Poor Quality",
            res_good: "Good",
            res_bad: "Poor",
            chart_title: "Sleep Activity (Weekly)",
            insights_title: "AI Insights",
            insight_1_title_good: "Late Caffeine",
            insight_1_desc_good: "You had coffee at 4 PM. This might delay your deep sleep starts.",
            insight_2_title_good: "Screen Time",
            insight_2_desc_good: "High blue light exposure detected 30 mins before bed.",
            insight_1_title_bad: "Irregular Rhythm",
            insight_1_desc_bad: "You've been going to bed at very different times. This causes high insomnia risk.",
            insight_2_title_bad: "High Stress",
            insight_2_desc_bad: "Your HRV shows high stress levels during the day, making it hard to relax.",
            chat_placeholder: "Type your message here...",
            analysis_title: "Detailed Stress & Recovery",
            analysis_subtitle: "AI Correlation Analysis based on your lifestyle patterns.",
            corr_caffeine: "Caffeine Impact",
            corr_exercise: "Exercise Benefit",
            corr_phone: "Phone Usage Before Bed",
            val_high: "High",
            val_very_high: "Very High",
            val_negative: "Negative Impact",
            val_moderate: "Moderate Impact",
            val_severe: "Severe Impact",
            stage_title: "Sleep Stage Analysis",
            legend_deep: "Deep",
            legend_light: "Light",
            legend_rem: "REM",
            legend_awake: "Awake",
            risk_title: "Risk Assessment",
            risk_label: "Insomnia Risk",
            risk_low: "LOW",
            risk_high: "HIGH",
            risk_desc_good: "Based on your trends, you are maintaining a healthy circadian rhythm.",
            risk_desc_bad: "Elevated risk detected. Your sleep schedule is irregular and shows severe fragmentation.",
            history_search: "Search past nights...",
            filter_30: "Last 30 Days",
            filter_month: "This Month",
            th_date: "Date",
            th_duration: "Duration",
            th_score: "Score",
            th_stress: "Stress",
            th_status: "Status",
            chat_greeting: "Hello Thanaphong! I'm Luna, your AI Sleep Coach. How did you feel when you woke up today?",
            bot_responses: [
                "That's interesting. Your data shows a correlation between late-night blue light and reduced REM sleep.",
                "Based on your profile, I recommend avoiding caffeine after 2 PM today to improve tonight's sleep score.",
                "Your heart rate variability (HRV) was slightly lower than usual. You may want to consider a light evening meditation.",
                "Good effort on your 7-hour sleep streak! Your recovery is at 84%.",
                "I noticed you've been using your phone 30 minutes before bed. This can suppress melatonin by up to 22%."
            ],
            advice_stress: "I see you're feeling stressed. To calm your mind before bed, try the 4-7-8 breathing technique: Inhale for 4s, hold for 7s, exhale for 8s. This signals your nervous system to relax.",
            advice_work: "Thinking about work can keep your brain in 'active mode'. Try a 'Brain Dump': Write down everything you're worried about for tomorrow on paper. This helps your brain give permission to stop processing them for tonight.",
            advice_insomnia: "If you can't fall asleep within 20 minutes, get out of bed. Go to another room, do something relaxing in dim light (like reading a paper book), and only return to bed when you feel sleepy. This prevents your brain from associating your bed with being awake and frustrated."
        },
        th: {
            nav_dashboard: "หน้าหลัก",
            nav_coach: "โค้ช AI ส่วนตัว",
            nav_analysis: "การวิเคราะห์",
            nav_history: "ประวัติ",
            user_status: "บัญชีโปร",
            sync_btn: "ซิงค์นาฬิกา",
            hero_title: "สวัสดีตอนเช้า, คุณธนพงศ์!",
            hero_desc_good: "คุณภาพการนอนของคุณเมื่อคืนคือ <span class='highlight' style='color:#10b981;'>84%</span> คุณฟื้นฟูร่างกายได้ดีและพร้อมสำหรับวันใหม่",
            hero_desc_bad: "คุณภาพการนอนของคุณเมื่อคืนคือ <span class='highlight' style='color:#f43f5e;'>45%</span> คุณอาจรู้สึกเหนื่อยล้าในวันนี้",
            stat_duration: "ระยะเวลาการนอน",
            stat_duration_meta_good: "+42 นาที จากเมื่อวาน",
            stat_duration_meta_bad: "-1 ชม. 30 นาที จากเมื่อวาน",
            stat_hr: "อัตราการเต้นหัวใจเฉลี่ย",
            stat_hr_meta_good: "อยู่ในเกณฑ์ปกติ",
            stat_hr_meta_bad: "อัตราการเต้นหัวใจขณะพักสูง",
            stat_stress: "ระดับความเครียด",
            stat_stress_meta_good: "ความเครียดต่ำ",
            stat_stress_meta_bad: "ความเครียดสูง",
            stat_deep: "หลับลึก",
            stat_deep_meta_good: "คุณภาพดี",
            stat_deep_meta_bad: "คุณภาพแย่",
            res_good: "ดี",
            res_bad: "แย่",
            chart_title: "กิจกรรมการนอน (รายสัปดาห์)",
            insights_title: "ข้อมูลจาก AI",
            insight_1_title_good: "คาเฟอีนช่วงเย็น",
            insight_1_desc_good: "คุณดื่มกาแฟตอน 16:00 น. ซึ่งอาจทำให้การหลับลึกเริ่มช้าลง",
            insight_2_title_good: "การใช้หน้าจอ",
            insight_2_desc_good: "ตรวจพบการใช้แสงสีน้ำเงินสูง 30 นาทีก่อนนอน",
            insight_1_title_bad: "วงจรการนอนไม่สม่ำเสมอ",
            insight_1_desc_bad: "คุณเข้านอนไม่เป็นเวลา ส่งผลให้ความเสี่ยงการนอนไม่หลับเพิ่มสูงขึ้น",
            insight_2_title_bad: "ความเครียดสูง",
            insight_2_desc_bad: "ระดับความเครียดสะสมระหว่างวันสูงมาก ทำให้ร่างกายผ่อนคลายได้ยาก",
            chat_placeholder: "พิมพ์ข้อความที่นี่...",
            analysis_title: "รายละเอียดความเครียดและการฟื้นฟู",
            analysis_subtitle: "การวิเคราะห์ความสัมพันธ์โดย AI ตามพฤติกรรมของคุณ",
            corr_caffeine: "ผลกระทบจากคาเฟอีน",
            corr_exercise: "ประโยชน์จากการออกกำลังกาย",
            corr_phone: "การใช้มือถือก่อนนอน",
            val_high: "สูง",
            val_very_high: "สูงมาก",
            val_negative: "ผลกระทบเชิงลบ",
            val_moderate: "ผลกระทบปานกลาง",
            val_severe: "ผลกระทบรุนแรง",
            stage_title: "วิเคราะห์ระยะการนอน",
            legend_deep: "หลับลึก",
            legend_light: "หลับตื้น",
            legend_rem: "หลับฝัน (REM)",
            legend_awake: "ตื่น",
            risk_title: "การประเมินความเสี่ยง",
            risk_label: "ความเสี่ยงนอนไม่หลับ",
            risk_low: "ต่ำ",
            risk_high: "สูง",
            risk_desc_good: "จากแนวโน้มของคุณ คุณกำลังรักษาวงจรการนอนที่ดี",
            risk_desc_bad: "พบความเสี่ยงสูง ตารางการนอนของคุณไม่สม่ำเสมอและมีการตื่นกลางดึกบ่อยครั้ง",
            history_search: "ค้นหาประวัติการนอน...",
            filter_30: "30 วันที่ผ่านมา",
            filter_month: "เดือนนี้",
            th_date: "วันที่",
            th_duration: "ระยะเวลา",
            th_score: "คะแนน",
            th_stress: "เครียด",
            th_status: "สถานะ",
            chat_greeting: "สวัสดีค่ะคุณธนพงศ์! ลูน่าคือโค้ช AI ส่วนตัวของคุณ วันนี้หลังตื่นนอนคุณรู้สึกเป็นอย่างไรบ้างคะ?",
            bot_responses: [
                "น่าสนใจมากค่ะ ข้อมูลของคุณแสดงความสัมพันธ์ระหว่างแสงสีน้ำเงินช่วงดึกกับการนอนหลับช่วง REM ที่ลดลง",
                "จากโปรไฟล์ของคุณ แนะนำให้งดคาเฟอีนหลังบ่าย 2 โมงในวันนี้ เพื่อคะแนนการนอนที่ดีขึ้นในคืนนี้ค่ะ",
                "ค่า HRV ของคุณต่ำกว่าปกติเล็กน้อย ลองหาเวลาทำสมาธิสั้นๆ ในช่วงเย็นดูนะคะ",
                "ทำได้ดีมากค่ะที่นอนติดต่อกันได้ 7 ชั่วโมง การฟื้นฟูร่างกายของคุณอยู่ที่ 84%",
                "ตรวจพบว่าคุณใช้มือถือก่อนนอน 30 นาที ซึ่งอาจยับยั้งเมลาโทนินลงได้ถึง 22% ค่ะ"
            ],
            advice_stress: "เข้าใจเลยค่ะว่าความเครียดส่งผลต่อการนอน ลองใช้เทคนิคการหายใจแบบ 4-7-8 ดูนะคะ: หายใจเข้า 4 วินาที, กลั้นหายใจ 7 วินาที, และผ่อนลมหายใจออก 8 วินาที วิธีนี้จะช่วยส่งสัญญาณให้ระบบประสาทของคุณผ่อนคลายลงค่ะ",
            advice_work: "การคิดเรื่องงานทำให้สมองตื่นตัวตลอดเวลา แนะนำให้ทำ 'Brain Dump' ค่ะ ลองจดทุกอย่างที่กังวลหรือต้องทำในวันพรุ่งนี้ลงในกระดาษ วิธีนี้จะช่วยให้สมองรู้สึกว่า 'ฝากงานไว้ในกระดาษแล้ว' และยอมให้ตัวเองพักผ่อนได้ในคืนนี้ค่ะ",
            advice_insomnia: "หากนอนไม่หลับเกิน 20 นาที แนะนำให้ลุกออกจากเตียงก่อนค่ะ ไปทำกิจกรรมเบาๆ ในที่แสงสลัว เช่น อ่านหนังสือเล่ม (ไม่ใช่หน้าจอ) แล้วค่อยกลับมานอนเมื่อรู้สึกง่วงจริงๆ เพื่อไม่ให้สมองจำสลับกันว่าเตียงคือที่สำหรับความตื่นตัวและหงุดหงิดค่ะ"
        }
    };

    let currentLang = 'th';
    let currentResult = 'good';

    const resultData = {
        good: {
            score: 84,
            duration: "7h 24m",
            meta_duration_class: "success",
            meta_duration_i18n: "stat_duration_meta_good",
            hr: "58 BPM",
            meta_hr_class: "",
            meta_hr_i18n: "stat_hr_meta_good",
            stress: "22%",
            meta_stress_class: "success",
            meta_stress_i18n: "stat_stress_meta_good",
            deep: "1h 45m",
            meta_deep_class: "",
            meta_deep_i18n: "stat_deep_meta_good",
            hero_desc_i18n: "hero_desc_good",
            chart_data: [7.5, 6.8, 8.2, 7.1, 6.5, 8.5, 7.0],
            insight_1: { icon: "cafe-outline", title: "insight_1_title_good", desc: "insight_1_desc_good" },
            insight_2: { icon: "phone-portrait-outline", title: "insight_2_title_good", desc: "insight_2_desc_good" },
            corr_caffeine: { w: 75, val: "val_high" },
            corr_exercise: { w: 90, val: "val_very_high" },
            corr_phone: { w: 85, val: "val_negative" },
            pie: { deep: 25, light: 50, rem: 20, awake: 5 },
            risk_class: "low",
            risk_i18n: "risk_low",
            risk_desc_i18n: "risk_desc_good",
            history_0: { date: 'Oct 24, 2023', duration: '7h 24m', score: 84, stress: '22%', status: 'Recovered' }
        },
        bad: {
            score: 45,
            duration: "4h 15m",
            meta_duration_class: "warning",
            meta_duration_i18n: "stat_duration_meta_bad",
            hr: "85 BPM",
            meta_hr_class: "warning",
            meta_hr_i18n: "stat_hr_meta_bad",
            stress: "78%",
            meta_stress_class: "warning",
            meta_stress_i18n: "stat_stress_meta_bad",
            deep: "25m",
            meta_deep_class: "warning",
            meta_deep_i18n: "stat_deep_meta_bad",
            hero_desc_i18n: "hero_desc_bad",
            chart_data: [4.5, 5.0, 3.8, 6.0, 2.5, 4.0, 4.2],
            insight_1: { icon: "calendar-outline", title: "insight_1_title_bad", desc: "insight_1_desc_bad" },
            insight_2: { icon: "flash-outline", title: "insight_2_title_bad", desc: "insight_2_desc_bad" },
            corr_caffeine: { w: 95, val: "val_very_high" },
            corr_exercise: { w: 30, val: "val_moderate" },
            corr_phone: { w: 95, val: "val_severe" },
            pie: { deep: 8, light: 65, rem: 7, awake: 20 },
            risk_class: "high",
            risk_i18n: "risk_high",
            risk_desc_i18n: "risk_desc_bad",
            history_0: { date: 'Oct 24, 2023', duration: '4h 15m', score: 45, stress: '78%', status: 'Exhausted' }
        }
    };

    function updateResultUI() {
        const data = resultData[currentResult];
        
        const circle = document.querySelector('.circle');
        const percentage = document.querySelector('.percentage');
        if (circle) {
            circle.setAttribute('stroke-dasharray', `${data.score}, 100`);
            circle.style.stroke = getScoreColor(data.score);
        }
        if (percentage) percentage.textContent = data.score;

        const valDuration = document.getElementById('val-duration');
        if (valDuration) valDuration.textContent = data.duration;
        
        const valHr = document.getElementById('val-hr');
        if (valHr) valHr.textContent = data.hr;

        const valStress = document.getElementById('val-stress');
        if (valStress) valStress.textContent = data.stress;

        const valDeep = document.getElementById('val-deep');
        if (valDeep) valDeep.textContent = data.deep;

        updateMetaElement('hero-desc', data.hero_desc_i18n, '');
        updateMetaElement('meta-duration', data.meta_duration_i18n, data.meta_duration_class);
        updateMetaElement('meta-hr', data.meta_hr_i18n, data.meta_hr_class);
        updateMetaElement('meta-stress', data.meta_stress_i18n, data.meta_stress_class);
        updateMetaElement('meta-deep', data.meta_deep_i18n, data.meta_deep_class);

        // Update Charts Data
        const chartBars = document.querySelectorAll('.chart-bar');
        chartBars.forEach((bar, index) => {
            if(data.chart_data[index]) {
                bar.style.height = `${(data.chart_data[index] / 10) * 100}%`;
                bar.style.background = currentResult === 'good' ? 'linear-gradient(to top, var(--accent-indigo), var(--accent-violet))' : 'linear-gradient(to top, #f43f5e, #fb7185)';
            }
        });

        // Insights
        const i1 = data.insight_1, i2 = data.insight_2;
        document.getElementById('insight-1-icon').setAttribute('name', i1.icon);
        updateMetaElement('insight-1-title', i1.title, '');
        updateMetaElement('insight-1-desc', i1.desc, '');
        document.getElementById('insight-2-icon').setAttribute('name', i2.icon);
        updateMetaElement('insight-2-title', i2.title, '');
        updateMetaElement('insight-2-desc', i2.desc, '');

        // Analysis Correlational Stats
        updateCorrStats('caffeine', data.corr_caffeine);
        updateCorrStats('exercise', data.corr_exercise);
        updateCorrStats('phone', data.corr_phone);

        // Pie Chart
        const pie = data.pie;
        const sum_v1 = pie.deep;
        const sum_v2 = pie.deep + pie.light;
        const sum_v3 = pie.deep + pie.light + pie.rem;
        const pieStyle = `conic-gradient(
            #6366f1 0% ${sum_v1}%,
            #818cf8 ${sum_v1}% ${sum_v2}%,
            #a5b4fc ${sum_v2}% ${sum_v3}%,
            #e0e7ff ${sum_v3}% 100%
        )`;
        const pieChart = document.getElementById('sleep-pie-chart');
        if(pieChart) pieChart.style.background = pieStyle;
        if(document.getElementById('pct-deep')) document.getElementById('pct-deep').textContent = pie.deep;
        if(document.getElementById('pct-light')) document.getElementById('pct-light').textContent = pie.light;
        if(document.getElementById('pct-rem')) document.getElementById('pct-rem').textContent = pie.rem;
        if(document.getElementById('pct-awake')) document.getElementById('pct-awake').textContent = pie.awake;

        // Risk Gauge
        updateMetaElement('risk-value', data.risk_i18n, data.risk_class);
        updateMetaElement('risk-desc', data.risk_desc_i18n, '');

        // Update History
        renderHistory();
    }

    function updateCorrStats(id, data) {
        const fill = document.getElementById(`fill-${id}`);
        const val = document.getElementById(`val-${id}`);
        if(fill) {
            fill.style.width = `${data.w}%`;
            fill.style.background = currentResult === 'good' ? 'linear-gradient(to right, var(--accent-indigo), var(--accent-violet))' : 'linear-gradient(to right, #f43f5e, #fda4af)';
        }
        if(val) {
            val.setAttribute('data-i18n', data.val);
            if (translations[currentLang] && translations[currentLang][data.val]) {
                val.innerHTML = `${translations[currentLang][data.val]} (${data.w}%)`;
            }
        }
    }

    function updateMetaElement(id, i18nKey, className) {
        const el = document.getElementById(id);
        if (!el) return;
        el.setAttribute('data-i18n', i18nKey);
        el.className = 'stat-meta ' + className;
        if (id === 'hero-desc') el.className = '';
        if (translations[currentLang] && translations[currentLang][i18nKey]) {
            el.innerHTML = translations[currentLang][i18nKey];
        }
    }

    function switchResult(res) {
        currentResult = res;
        document.getElementById('res-good').classList.toggle('active', res === 'good');
        document.getElementById('res-bad').classList.toggle('active', res === 'bad');
        updateResultUI();
    }

    function switchLanguage(lang) {
        currentLang = lang;
        
        // Update Class
        document.getElementById('lang-th').classList.toggle('active', lang === 'th');
        document.getElementById('lang-en').classList.toggle('active', lang === 'en');

        // Update Text Content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update Placeholders
        document.querySelectorAll('[data-placeholder]').forEach(el => {
            const key = el.getAttribute('data-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update Title according to active page
        const activeNav = document.querySelector('.nav-links li.active span');
        if (activeNav) {
            document.getElementById('page-title').textContent = activeNav.textContent;
        }
    }

    document.getElementById('lang-th').addEventListener('click', () => switchLanguage('th'));
    document.getElementById('lang-en').addEventListener('click', () => switchLanguage('en'));

    const resGoodBtn = document.getElementById('res-good');
    const resBadBtn = document.getElementById('res-bad');
    if (resGoodBtn) resGoodBtn.addEventListener('click', () => switchResult('good'));
    if (resBadBtn) resBadBtn.addEventListener('click', () => switchResult('bad'));

    // Initialize in Thai
    switchLanguage('th');
    
    // Set initial chart color
    const initialCircle = document.querySelector('.circle');
    if (initialCircle) {
        initialCircle.style.stroke = getScoreColor(84);
    }

    // Navigation Logic
    const navLinks = document.querySelectorAll('.nav-links li');
    const sections = document.querySelectorAll('.page-section');
    const pageTitle = document.getElementById('page-title');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const page = link.getAttribute('data-page');

            // Update Active Link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Show Section
            sections.forEach(sec => {
                sec.classList.remove('active');
                if (sec.id === page) {
                    sec.classList.add('active');
                }
            });

            // Update Title
            pageTitle.textContent = link.querySelector('span').textContent;
        });
    });

    // Mock Weekly Sleep Chart
    const sleepChart = document.getElementById('sleep-chart');
    const mockWeeklyData = [
        { day: 'Mon', h: 7 },
        { day: 'Tue', h: 6.8 },
        { day: 'Wed', h: 8.2 },
        { day: 'Thu', h: 7.1 },
        { day: 'Fri', h: 6.5 },
        { day: 'Sat', h: 8.5 },
        { day: 'Sun', h: 7.0 },
    ];

    if (sleepChart) {
        mockWeeklyData.forEach((data, index) => {
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.height = `${(data.h / 10) * 100}%`;
            bar.setAttribute('data-day', data.day);
            sleepChart.appendChild(bar);
        });
    }

    // Chatbot Logic
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${sender}`;
        
        let innerHTML = '';
        if (sender === 'bot') {
            innerHTML += `
                <div class="bot-avatar-msg">
                    <img src="logo.png" alt="CareSleep">
                </div>
            `;
        }
        innerHTML += `<div class="message-bubble">${text}</div>`;
        
        msgDiv.innerHTML = innerHTML;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function handleChat() {
        const text = chatInput.value.trim().toLowerCase();
        if (!text) return;

        addMessage(chatInput.value.trim(), 'user');
        chatInput.value = '';

        // Simulate Bot Typing
        setTimeout(() => {
            let response = "";
            const langData = translations[currentLang];

            // Keyword Matching
            if (text.includes('งาน') || text.includes('work') || text.includes('office') || text.includes('job')) {
                response = langData.advice_work;
            } else if (text.includes('เครียด') || text.includes('stress') || text.includes('worry') || text.includes('กังวล')) {
                response = langData.advice_stress;
            } else if (text.includes('นอนไม่หลับ') || text.includes('can\'t sleep') || text.includes('insomnia') || text.includes('หลับไม่ลง')) {
                response = langData.advice_insomnia;
            } else {
                const currentResponses = langData.bot_responses;
                response = currentResponses[Math.floor(Math.random() * currentResponses.length)];
            }
            
            addMessage(response, 'bot');
        }, 800);
    }

    if (sendBtn) {
        sendBtn.addEventListener('click', handleChat);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleChat();
        });
    }

    // History Table Population
    const historyBody = document.getElementById('history-body');
    const historyData = [
        { date: 'Oct 23, 2023', duration: '6h 45m', score: 72, stress: '35%', status: 'Tired' },
        { date: 'Oct 22, 2023', duration: '8h 12m', score: 91, stress: '18%', status: 'Excellent' },
        { date: 'Oct 21, 2023', duration: '7h 05m', score: 79, stress: '28%', status: 'Normal' },
        { date: 'Oct 20, 2023', duration: '5h 30m', score: 55, stress: '52%', status: 'Stressed' },
        { date: 'Oct 19, 2023', duration: '7h 50m', score: 88, stress: '20%', status: 'Recovered' },
    ];

    function renderHistory() {
        if (!historyBody) return;
        historyBody.innerHTML = '';
        
        // Add dynamic first row based on result
        const firstRow = resultData[currentResult].history_0;
        const allHistory = [firstRow, ...historyData];

        allHistory.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.duration}</td>
                <td><span style="font-weight:600; color:${getScoreColor(item.score)}">${item.score}</span></td>
                <td>${item.stress}</td>
                <td><span class="status-pill ${item.score < 50 ? 'bad-status' : ''}">${item.status}</span></td>
            `;
            historyBody.appendChild(row);
        });
    }
    
    // Initial Render
    renderHistory();

    function getScoreColor(score) {
        if (score >= 85) return '#10b981'; // Green
        if (score >= 70) return '#6366f1'; // Indigo
        return '#f43f5e'; // Rose
    }
});
