const GEMINI_API_KEY = 'AIzaSyCwDYmtWRYVfvjOL5EW2GaZCP0CgnNhD1k';

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
            hero_desc: "Your sleep quality was <span class='highlight'>84%</span> last night. You're recovered and ready to go.",
            stat_duration: "Sleep Duration",
            stat_duration_meta: "+42m from yesterday",
            stat_hr: "Avg Heart Rate",
            stat_hr_meta: "Normal Range",
            stat_stress: "Stress Level",
            stat_stress_meta: "Low Stress",
            stat_deep: "Deep Sleep",
            stat_deep_meta: "Good Quality",
            chart_title: "Sleep Activity (Weekly)",
            insights_title: "AI Insights",
            insight_1_title: "Late Caffeine",
            insight_1_desc: "You had coffee at 4 PM. This might delay your deep sleep starts.",
            insight_2_title: "Screen Time",
            insight_2_desc: "High blue light exposure detected 30 mins before bed.",
            chat_placeholder: "Type your message here...",
            analysis_title: "Detailed Stress & Recovery",
            analysis_subtitle: "AI Correlation Analysis based on your lifestyle patterns.",
            corr_caffeine: "Caffeine Impact",
            corr_exercise: "Exercise Benefit",
            corr_phone: "Phone Usage Before Bed",
            val_high: "High (75%)",
            val_very_high: "Very High (90%)",
            val_negative: "Negative Impact (85%)",
            stage_title: "Sleep Stage Analysis",
            legend_deep: "Deep",
            legend_light: "Light",
            legend_rem: "REM",
            legend_awake: "Awake",
            risk_title: "Risk Assessment",
            risk_label: "Insomnia Risk",
            risk_low: "LOW",
            risk_desc: "Based on your trends, you are maintaining a healthy circadian rhythm.",
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
            hero_desc: "คุณภาพการนอนของคุณเมื่อคืนคือ <span class='highlight'>84%</span> คุณฟื้นฟูร่างกายได้ดีและพร้อมสำหรับวันใหม่",
            stat_duration: "ระยะเวลาการนอน",
            stat_duration_meta: "+42 นาที จากเมื่อวาน",
            stat_hr: "อัตราการเต้นหัวใจเฉลี่ย",
            stat_hr_meta: "อยู่ในเกณฑ์ปกติ",
            stat_stress: "ระดับความเครียด",
            stat_stress_meta: "ความเครียดต่ำ",
            stat_deep: "หลับลึก",
            stat_deep_meta: "คุณภาพดี",
            chart_title: "กิจกรรมการนอน (รายสัปดาห์)",
            insights_title: "ข้อมูลจาก AI",
            insight_1_title: "คาเฟอีนช่วงเย็น",
            insight_1_desc: "คุณดื่มกาแฟตอน 16:00 น. ซึ่งอาจทำให้การหลับลึกเริ่มช้าลง",
            insight_2_title: "การใช้หน้าจอ",
            insight_2_desc: "ตรวจพบการใช้แสงสีน้ำเงินสูง 30 นาทีก่อนนอน",
            chat_placeholder: "พิมพ์ข้อความที่นี่...",
            analysis_title: "รายละเอียดความเครียดและการฟื้นฟู",
            analysis_subtitle: "การวิเคราะห์ความสัมพันธ์โดย AI ตามพฤติกรรมของคุณ",
            corr_caffeine: "ผลกระทบจากคาเฟอีน",
            corr_exercise: "ประโยชน์จากการออกกำลังกาย",
            corr_phone: "การใช้มือถือก่อนนอน",
            val_high: "สูง (75%)",
            val_very_high: "สูงมาก (90%)",
            val_negative: "ผลกระทบเชิงลบ (85%)",
            stage_title: "วิเคราะห์ระยะการนอน",
            legend_deep: "หลับลึก",
            legend_light: "หลับตื้น",
            legend_rem: "หลับฝัน (REM)",
            legend_awake: "ตื่น",
            risk_title: "การประเมินความเสี่ยง",
            risk_label: "ความเสี่ยงนอนไม่หลับ",
            risk_low: "ต่ำ",
            risk_desc: "จากแนวโน้มของคุณ คุณกำลังรักษาวงจรการนอนที่ดี",
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

    // Initialize in Thai
    switchLanguage('th');

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

            // Show Section with smooth transition
            sections.forEach(sec => {
                sec.classList.remove('active');
                if (sec.id === page) {
                    sec.classList.add('active');
                }
            });

            // Update Title with animation
            pageTitle.style.opacity = '0';
            setTimeout(() => {
                pageTitle.textContent = link.querySelector('span').textContent;
                pageTitle.style.transition = 'all 0.4s ease';
                pageTitle.style.opacity = '1';
            }, 150);
        });
    });

    // Mock Weekly Sleep Chart
    const sleepChart = document.getElementById('sleep-chart');
    const weeklyData = [
        { day: 'Mon', hours: 7.5 },
        { day: 'Tue', hours: 6.8 },
        { day: 'Wed', hours: 8.2 },
        { day: 'Thu', hours: 7.1 },
        { day: 'Fri', hours: 6.5 },
        { day: 'Sat', hours: 8.5 },
        { day: 'Sun', hours: 7.9 },
    ];

    if (sleepChart) {
        weeklyData.forEach((data, index) => {
            const bar = document.createElement('div');
            bar.className = 'chart-bar';
            bar.style.height = `${(data.hours / 10) * 100}%`;
            bar.setAttribute('data-day', data.day);
            bar.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s both`;
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
        msgDiv.style.animation = 'fadeInUp 0.4s ease-out';

        // จัดการเรื่องการเว้นบรรทัดและตัวหนาเบื้องต้น
        let formattedText = text
            .replace(/\n/g, '<br>')
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        let innerHTML = '';
        if (sender === 'bot') {
            innerHTML += `
                <div class="bot-avatar-msg">
                    <img src="logo.png" alt="CareSleep">
                </div>
            `;
        }
        innerHTML += `<div class="message-bubble">${formattedText}</div>`;

        msgDiv.innerHTML = innerHTML;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return msgDiv;
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message bot typing-indicator';
        indicator.id = 'typing-indicator';
        indicator.innerHTML = `
            <div class="bot-avatar-msg">
                <img src="logo.png" alt="CareSleep">
            </div>
            <div class="message-bubble">
                <div class="dots"><span>.</span><span>.</span><span>.</span></div>
            </div>
        `;
        chatMessages.appendChild(indicator);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        return indicator;
    }

    async function getGeminiResponse(userPrompt) {
        const systemPrompt = `คุณคือ "ลูน่า" โค้ชสอนการนอนหลับในแอป "CareSleep AI" ตอบเป็นภาษาไทย
        กฎสำคัญ:
        - ตอบคำถามเฉพาะเรื่องที่เกี่ยวกับ การนอนหลับ, สุขภาพที่ส่งผลต่อการนอน, ความเครียด, และวิธีปรับปรุงคุณภาพการนอนเท่านั้น
        - หากมีการถามเรื่องที่ไม่เกี่ยวข้อง ให้ตอบปฏิเสธอย่างสุภาพ
        
        กลยุทธ์การโค้ช (สำคัญมาก):
        - หากผู้ใช้บ่นว่า "นอนไม่อิ่ม" "ตื่นมาไม่สดชื่น" หรือ "หลับยาก" ห้ามสรุปคำแนะนำทันที
        - ให้คุณทำหน้าที่เป็นนักวิเคราะห์ โดยการถามคำถามเจาะลึกเพิ่ม 2-3 ข้อ เพื่อหาสาเหตุ เช่น:
            1. สถาพแวดล้อม: อุณหภูมิห้อง, แสงไฟ, หรือเสียงรบกวนเป็นอย่างไร?
            2. พฤติกรรม: ดื่มกาแฟหลังบ่ายสองไหม? เล่นมือถือก่อนนอนกี่นาที?
            3. สภาวะจิตใจ: ช่วงนี้กังวลเรื่องอะไรเป็นพิเศษไหม?
            4. ช่วงเวลา: เข้านอนและตื่นนอนเวลาเดิมทุกวันหรือไม่?
        
        คำแนะนำสำหรับการตอบ:
        1. ใช้การเว้นบรรทัด (New line) ให้ชัดเจน
        2. ใช้หัวข้อแบบจุด (Bullet points)
        3. เน้นข้อความสำคัญด้วย **ตัวหนา**
        4. ตอบด้วยความสุภาพและเป็นกันเอง`;

        // รายชื่อโมเดลที่คุณใช้งานจริงได้จากรายการใน Console
        const models = ["gemini-2.0-flash", "gemini-flash-latest", "gemini-pro-latest"];

        let lastError = "";
        for (const model of models) {
            try {
                const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
                const resp = await fetch(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: `${systemPrompt}\n\nคำถาม: ${userPrompt}` }] }]
                    })
                });

                const data = await resp.json();
                if (resp.ok) return data.candidates[0].content.parts[0].text;

                lastError = data.error?.message || "Error";
                console.warn(`Model ${model} failed: ${lastError}`);
            } catch (err) {
                lastError = err.message;
            }
        }
        throw new Error(lastError);
    }

    async function handleChat() {
        const text = chatInput.value.trim();
        if (!text) return;

        // Add user message
        addMessage(text, 'user');
        chatInput.value = '';
        chatInput.focus();
        
        const indicator = showTypingIndicator();

        try {
            let response = "";
            if (GEMINI_API_KEY && GEMINI_API_KEY.length > 20) {
                response = await getGeminiResponse(text);
            } else {
                await new Promise(r => setTimeout(r, 1200));
                response = translations[currentLang].bot_responses[Math.floor(Math.random() * translations[currentLang].bot_responses.length)];
            }
            indicator.remove();
            addMessage(response, 'bot');
        } catch (error) {
            console.error(error);
            indicator.remove();
            addMessage(`ข้อผิดพลาด: ${error.message} (โปรดตรวจสอบ API Key หรืออินเทอร์เน็ต)`, 'bot');
        }
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
        { date: 'Oct 24, 2023', duration: '7h 24m', score: 84, stress: '22%', status: 'Recovered' },
        { date: 'Oct 23, 2023', duration: '6h 45m', score: 72, stress: '35%', status: 'Tired' },
        { date: 'Oct 22, 2023', duration: '8h 12m', score: 91, stress: '18%', status: 'Excellent' },
        { date: 'Oct 21, 2023', duration: '7h 05m', score: 79, stress: '28%', status: 'Normal' },
        { date: 'Oct 20, 2023', duration: '5h 30m', score: 55, stress: '52%', status: 'Stressed' },
        { date: 'Oct 19, 2023', duration: '7h 50m', score: 88, stress: '20%', status: 'Recovered' },
    ];

    if (historyBody) {
        historyData.forEach((item, index) => {
            const row = document.createElement('tr');
            row.style.animation = `fadeInUp 0.6s ease-out ${index * 0.05}s both`;
            row.innerHTML = `
                <td>${item.date}</td>
                <td>${item.duration}</td>
                <td><span style="font-weight:700; color:${getScoreColor(item.score)}">${item.score}</span></td>
                <td>${item.stress}</td>
                <td><span class="status-pill">${item.status}</span></td>
            `;
            historyBody.appendChild(row);
        });
    }

    function getScoreColor(score) {
        if (score >= 85) return '#10b981'; // Green
        if (score >= 70) return '#6366f1'; // Indigo
        return '#f43f5e'; // Rose
    }
});
