const monthNames = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
document.getElementById('dynamicnmonth').innerText = monthNames[new Date().getMonth()];

const musicServices = [
    { region: "NA", name: "Spotify", price: 6.99, display: "NA Spotify" },
    { region: "NA", name: "Apple Music", price: 6.99, display: "NA Apple" },
    { region: "NA", name: "YouTube Music", price: 5.99, display: "NA YouTube" },
    { region: "NA", name: "Amazon Music", price: 5.99, display: "NA Amazon" },
    { region: "NA", name: "Tidal", price: 4.99, display: "NA Tidal" },
    { region: "NA", name: "Deezer", price: 5.99, display: "NA Deezer" },
    { region: "NA", name: "Pandora", price: 5.99, display: "NA Pandora" },
    { region: "NA", name: "SoundCloud", price: 5.00, display: "NA SoundCloud" },
    { region: "ME", name: "Spotify", price: 2.99, display: "ME Spotify" },
    { region: "ME", name: "Apple Music", price: 3.49, display: "ME Apple" },
    { region: "ME", name: "YouTube Music", price: 2.99, display: "ME YouTube" },
    { region: "ME", name: "Anghami", price: 2.50, display: "ME Anghami" },
    { region: "ME", name: "Deezer", price: 2.99, display: "ME Deezer" },
    { region: "ME", name: "Tidal", price: 2.49, display: "ME Tidal" },
    { region: "ME", name: "SoundCloud", price: 2.50, display: "ME SoundCloud" },
    { region: "EU", name: "Spotify", price: 6.99, display: "EU Spotify" },
    { region: "EU", name: "Apple Music", price: 5.99, display: "EU Apple" },
    { region: "EU", name: "YouTube Music", price: 6.99, display: "EU YouTube" },
    { region: "EU", name: "Amazon Music", price: 5.99, display: "EU Amazon" },
    { region: "EU", name: "Deezer", price: 5.99, display: "EU Deezer" },
    { region: "EU", name: "Tidal", price: 5.99, display: "EU Tidal" },
    { region: "EU", name: "SoundCloud", price: 4.99, display: "EU SoundCloud" },
    { region: "AS", name: "Spotify", price: 1.99, display: "AS Spotify" },
    { region: "AS", name: "Apple Music", price: 2.49, display: "AS Apple" },
    { region: "AS", name: "YouTube Music", price: 1.99, display: "AS YouTube" },
    { region: "AS", name: "Amazon Music", price: 1.49, display: "AS Amazon" },
    { region: "AS", name: "JioSaavn", price: 1.29, display: "AS JioSaavn" },
    { region: "AS", name: "Gaana", price: 1.29, display: "AS Gaana" },
    { region: "AS", name: "Tidal", price: 1.99, display: "AS Tidal" },
    { region: "LA", name: "Spotify", price: 2.99, display: "LA Spotify" },
    { region: "LA", name: "Apple Music", price: 3.29, display: "LA Apple" },
    { region: "LA", name: "YouTube Music", price: 2.99, display: "LA YouTube" },
    { region: "LA", name: "Deezer", price: 2.99, display: "LA Deezer" },
    { region: "LA", name: "Tidal", price: 2.49, display: "LA Tidal" },
    { region: "LA", name: "Amazon Music", price: 2.49, display: "LA Amazon" },
    { region: "AF", name: "Spotify", price: 1.99, display: "AF Spotify" },
    { region: "AF", name: "Apple Music", price: 2.29, display: "AF Apple" },
    { region: "AF", name: "YouTube Music", price: 1.99, display: "AF YouTube" },
    { region: "AF", name: "Boomplay", price: 1.49, display: "AF Boomplay" },
    { region: "AF", name: "Deezer", price: 1.99, display: "AF Deezer" }
];

const foodServices = [
    { region: "ME", name: "Keeta", tier: "High", avgSavingsPct: 0.50, display: "ME Keeta" },
    { region: "ME", name: "Noon Food", tier: "Moderate", avgSavingsPct: 0.25, display: "ME Noon Food" },
    { region: "ME", name: "Jahez", tier: "Moderate", avgSavingsPct: 0.25, display: "ME Jahez" },
    { region: "ME", name: "Talabat", tier: "Low", avgSavingsPct: 0.05, display: "ME Talabat" },
    { region: "ME", name: "Hungerstation", tier: "Low", avgSavingsPct: 0.05, display: "ME Hungerstation" },
    { region: "NA", name: "UberEats", tier: "High", avgSavingsPct: 0.40, display: "NA UberEats" },
    { region: "NA", name: "DoorDash", tier: "Moderate", avgSavingsPct: 0.20, display: "NA DoorDash" },
    { region: "NA", name: "Grubhub", tier: "Low", avgSavingsPct: 0.05, display: "NA Grubhub" },
    { region: "EU", name: "Bolt Food", tier: "High", avgSavingsPct: 0.35, display: "EU Bolt Food" },
    { region: "EU", name: "Wolt", tier: "High", avgSavingsPct: 0.35, display: "EU Wolt" },
    { region: "EU", name: "Deliveroo", tier: "Moderate", avgSavingsPct: 0.20, display: "EU Deliveroo" },
    { region: "EU", name: "Just Eat", tier: "Low", avgSavingsPct: 0.05, display: "EU Just Eat" },
    { region: "EU", name: "UberEats", tier: "Low", avgSavingsPct: 0.05, display: "EU UberEats" },
    { region: "AS", name: "GrabFood", tier: "High", avgSavingsPct: 0.45, display: "AS GrabFood" },
    { region: "AS", name: "ShopeeFood", tier: "High", avgSavingsPct: 0.45, display: "AS ShopeeFood" },
    { region: "AS", name: "Foodpanda", tier: "Moderate", avgSavingsPct: 0.25, display: "AS Foodpanda" },
    { region: "AS", name: "GoFood", tier: "Low", avgSavingsPct: 0.10, display: "AS GoFood" },
    { region: "LA", name: "iFood", tier: "High", avgSavingsPct: 0.40, display: "LA iFood" },
    { region: "LA", name: "Rappi", tier: "High", avgSavingsPct: 0.40, display: "LA Rappi" },
    { region: "LA", name: "UberEats", tier: "Moderate", avgSavingsPct: 0.20, display: "LA UberEats" },
    { region: "LA", name: "PedidosYa", tier: "Low", avgSavingsPct: 0.05, display: "LA PedidosYa" },
    { region: "AF", name: "Chowdeck", tier: "High", avgSavingsPct: 0.35, display: "AF Chowdeck" },
    { region: "AF", name: "Bolt Food", tier: "High", avgSavingsPct: 0.35, display: "AF Bolt Food" },
    { region: "AF", name: "Glovo", tier: "Moderate", avgSavingsPct: 0.20, display: "AF Glovo" },
    { region: "AF", name: "UberEats", tier: "Low", avgSavingsPct: 0.05, display: "AF UberEats" }
];

const categoryData = {
    music: musicServices,
    food: foodServices
};

let chart;
const ctx = document.getElementById('impactChart').getContext('2d');
chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Current Spend', 'Optimized Target'],
        datasets: [{
            data: [0, 0],
            backgroundColor: ['rgba(239, 68, 68, 0.8)', 'rgba(127, 255, 98, 0.8)'],
            borderRadius: 8
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
            y: { ticks: { color: '#ffffff' }, grid: { color: 'rgba(255,255,255,0.1)' } },
            x: { ticks: { color: '#ffffff' }, grid: { display: false } }
        }
    }
});

function createExpenseCard() {
    const container = document.getElementById('expenseContainer');
    const box = document.createElement('div');
    box.className = 'expense-box';

    box.innerHTML = `
        <select class="expense-select category-select" onchange="updateSubOptions(this)">
            <option value="" disabled selected>Category</option>
            <option value="music">Music & Subs</option>
            <option value="food">Food & Dining</option>
        </select>

        <select class="expense-select sub-select" onchange="handleSubChange(this)">
            <option value="" disabled selected>Service</option>
        </select>

        <input type="text" class="expense-input custom-name-input" placeholder="Name..." oninput="calculateTotal()" />
        <input type="number" class="expense-input cost-input" placeholder="$0.00" oninput="calculateTotal()" />
<button class="remove-item-btn" onclick="removeExpenseCard(this)">&times;</button>    `;

    container.appendChild(box);
}

function updateSubOptions(categorySelect) {
    const box = categorySelect.closest('.expense-box');
    const subSelect = box.querySelector('.sub-select');
    const category = categorySelect.value;

    subSelect.innerHTML = '<option value="" disabled selected>Service</option>';
    
    const options = categoryData[category] || [];
    options.forEach((item, index) => {
        const opt = document.createElement('option');
        opt.value = index;
        opt.innerText = item.display;
        subSelect.appendChild(opt);
    });
    
    const optOther = document.createElement('option');
    optOther.value = 'other';
    optOther.innerText = 'Other...';
    subSelect.appendChild(optOther);
}

function handleSubChange(subSelect) {
    const box = subSelect.closest('.expense-box');
    const categorySelect = box.querySelector('.category-select');
    const customInput = box.querySelector('.custom-name-input');
    const costInput = box.querySelector('.cost-input');
    const category = categorySelect.value;
    const val = subSelect.value;

    if (val === 'other') {
        customInput.style.display = 'block';
        costInput.value = '';
    } else {
        customInput.style.display = 'none';
        if (category === 'music') {
            const selectedItem = musicServices[val];
            if (selectedItem) {
                costInput.value = selectedItem.price;
            }
        }
    }
    calculateTotal();
}

function removeExpenseCard(btn) {
    btn.closest('.expense-box').remove();
    calculateTotal();
}

function getActiveExpensesData() {
    const boxes = document.querySelectorAll('.expense-box');
    const expenses = [];

    boxes.forEach(box => {
        const category = box.querySelector('.category-select').value;
        const subIndex = box.querySelector('.sub-select').value;
        const customName = box.querySelector('.custom-name-input').value;
        const cost = parseFloat(box.querySelector('.cost-input').value) || 0;

        if (category === 'music' && subIndex !== 'other' && subIndex !== "") {
            const item = musicServices[subIndex];
            expenses.push({
                name: `${item.region} ${item.name}`,
                region: item.region,
                cost: cost,
                type: 'music'
            });
        } else if (category === 'food' && subIndex !== 'other' && subIndex !== "") {
            const item = foodServices[subIndex];
            expenses.push({
                name: `${item.region} ${item.name}`,
                region: item.region,
                cost: cost,
                avgSavingsPct: item.avgSavingsPct,
                tier: item.tier,
                type: 'food'
            });
        } else {
            expenses.push({
                name: customName || 'Custom Expense',
                cost: cost,
                type: 'custom'
            });
        }
    });

    return expenses.filter(item => item.cost > 0);
}

function analyzeAI() {
    const outputDiv = document.getElementById('aiOutput');
    
    outputDiv.innerHTML = `
        <div class="ai-card loading-card">
            <span class="pulse-dot"></span> Analyzing expenditure patterns...
        </div>
    `;

    setTimeout(() => {
        runOptimizationCheck();
    }, 1500);
}

function runOptimizationCheck() {
    const expenses = getActiveExpensesData();
    const outputDiv = document.getElementById('aiOutput');
    const MUSIC_THRESHOLD = 0.20;
    
    let totalSavings = 0;
    let messages = [];

    expenses.forEach(exp => {
        if (exp.type === 'music') {
            const regionalOptions = musicServices.filter(item => item.region === exp.region);
            const cheapestOption = regionalOptions.reduce((min, item) => 
                item.price < min.price ? item : min
            , regionalOptions[0]);

            const priceDiff = exp.cost - cheapestOption.price;

            if (priceDiff <= MUSIC_THRESHOLD) {
                messages.push(`
                    <div class="ai-card optimal-card">
                        <strong>Great Pick!</strong> ${exp.name} is already optimal in ${exp.region}.
                    </div>
                `);
            } else {
                totalSavings += priceDiff;
                messages.push(`
                    <div class="ai-card cut-card">
                        <strong>Smart Cut:</strong> Switch ${exp.name} to ${cheapestOption.region} ${cheapestOption.name} ($${cheapestOption.price.toFixed(2)}/m) to save <span>$${priceDiff.toFixed(2)}/m</span>.
                    </div>
                `);
            }
        } else if (exp.type === 'food') {
            const regionalOptions = foodServices.filter(item => item.region === exp.region);
            const topOption = regionalOptions.reduce((max, item) => 
                item.avgSavingsPct > max.avgSavingsPct ? item : max
            , regionalOptions[0]);

            const potentialSavingsPct = topOption.avgSavingsPct - exp.avgSavingsPct;
            const savingsAmount = exp.cost * potentialSavingsPct;

            if (potentialSavingsPct <= 0) {
                messages.push(`
                    <div class="ai-card optimal-card">
                        <strong>Great Pick!</strong> ${exp.name} has the highest discount frequency in ${exp.region}.
                    </div>
                `);
            } else {
                totalSavings += savingsAmount;
                messages.push(`
                    <div class="ai-card cut-card">
                        <strong>Smart Cut:</strong> Shift frequent orders from ${exp.name} to ${topOption.region} ${topOption.name} to save ~<span>$${savingsAmount.toFixed(2)}/m</span> in promo discounts.
                    </div>
                `);
            }
        }
    });

    outputDiv.innerHTML = messages.join('');
    calculateTotal(totalSavings);
}

function calculateTotal(savings = 0) {
    const expenses = getActiveExpensesData();
    const total = expenses.reduce((sum, item) => sum + item.cost, 0);
    const optimized = Math.max(0, total - savings);

    document.getElementById('dynamictotalcost').innerText = `$${total.toFixed(2)}`;
    chart.data.datasets[0].data = [total, optimized];
    chart.update();
}

const boxes = document.querySelectorAll('.forcastbox, .additembox, .aioutputbox, .bargraphcomparison');
boxes.forEach((box) => {
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const rotateX = (-y / (rect.height / 2)) * 3;
        const rotateY = (x / (rect.width / 2)) * 3;

        box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
});
const exchangeRates = {
    USD: { rate: 1.0, symbol: "$" },
    CAD: { rate: 1.35, symbol: "C$" },
    MXN: { rate: 17.10, symbol: "Mex$" },
    BRL: { rate: 4.98, symbol: "R$ " },
    ARS: { rate: 840.00, symbol: "ARS$" },
    CLP: { rate: 970.00, symbol: "CLP$" },
    COP: { rate: 3900.00, symbol: "COL$" },
    AED: { rate: 3.67, symbol: "AED " },
    SAR: { rate: 3.75, symbol: "SAR " },
    QAR: { rate: 3.64, symbol: "QAR " },
    KWD: { rate: 0.31, symbol: "KD " },
    OMR: { rate: 0.38, symbol: "OMR " },
    BHD: { rate: 0.38, symbol: "BD " },
    EGP: { rate: 48.20, symbol: "E\u00A3 " },
    NGN: { rate: 1400.00, symbol: "\u20A6" },
    ZAR: { rate: 18.90, symbol: "R " },
    KES: { rate: 132.00, symbol: "KSh " },
    EUR: { rate: 0.92, symbol: "\u20AC" },
    GBP: { rate: 0.79, symbol: "\u00A3" },
    CHF: { rate: 0.88, symbol: "CHF " },
    SEK: { rate: 10.35, symbol: "kr " },
    NOK: { rate: 10.55, symbol: "kr " },
    PLN: { rate: 3.96, symbol: "z\u0142 " },
    TRY: { rate: 32.10, symbol: "\u20BA" },
    INR: { rate: 83.10, symbol: "\u20B9" },
    JPY: { rate: 151.50, symbol: "\u00A5" },
    CNY: { rate: 7.22, symbol: "\u00A5" },
    AUD: { rate: 1.52, symbol: "A$" },
    NZD: { rate: 1.65, symbol: "NZ$" },
    SGD: { rate: 1.34, symbol: "S$" },
    HKD: { rate: 7.82, symbol: "HK$" },
    KRW: { rate: 1340.00, symbol: "\u20A9" },
    MYR: { rate: 4.72, symbol: "RM " },
    THB: { rate: 36.20, symbol: "\u0E3F" },
    IDR: { rate: 15800.00, symbol: "Rp " },
    PHP: { rate: 56.30, symbol: "\u20B1" },
    VND: { rate: 24800.00, symbol: "\u20AB" },
    PKR: { rate: 278.00, symbol: "Rs " }
};

let currentBaseTotal = 0;
let currentBaseSavings = 0;

function convertCurrency() {
    const selected = document.getElementById('currencySelect').value;
    const { rate, symbol } = exchangeRates[selected] || exchangeRates.USD;

    const convertedTotal = currentBaseTotal * rate;
    const convertedOptimized = Math.max(0, (currentBaseTotal - currentBaseSavings) * rate);

    document.getElementById('dynamictotalcost').innerText = `${symbol}${convertedTotal.toFixed(2)}`;
    
    if (chart) {
        chart.data.datasets[0].data = [convertedTotal, convertedOptimized];
        chart.update();
    }
}

function calculateTotal(savings = 0) {
    const expenses = getActiveExpensesData();
    currentBaseTotal = expenses.reduce((sum, item) => sum + item.cost, 0);
    currentBaseSavings = savings;

    convertCurrency();
}

function calculateManualUSD() {
    const inputVal = parseFloat(document.getElementById('manualAmountInput').value) || 0;
    const selectedCurrency = document.getElementById('currencySelect').value;
    const rateData = exchangeRates[selectedCurrency] || exchangeRates.USD;

    const usdAmount = inputVal / rateData.rate;

    document.getElementById('manualUSDResult').innerText = `$${usdAmount.toFixed(2)} USD`;
}

function convertCurrency() {
    const selected = document.getElementById('currencySelect').value;
    const { rate, symbol } = exchangeRates[selected] || exchangeRates.USD;

    const convertedTotal = currentBaseTotal * rate;
    const convertedOptimized = Math.max(0, (currentBaseTotal - currentBaseSavings) * rate);

    document.getElementById('dynamictotalcost').innerText = `${symbol}${convertedTotal.toFixed(2)}`;
    
    if (chart) {
        chart.data.datasets[0].data = [convertedTotal, convertedOptimized];
        chart.update();
    }

    calculateManualUSD();
}