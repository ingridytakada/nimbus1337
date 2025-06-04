document.addEventListener('DOMContentLoaded', function() {
    // Create and initialize enigma pages
    createBinaryDecodingEnigma(); // Now this is the first enigma
    createFraudAnalysisEnigma(); // Now this is the second enigma
    createEnigma3Page();
    createFinalForm();
    
    // Display the first enigma
    document.querySelector('.binary-decoding').style.display = 'block';
});

// Enigma 1: Binary Decoding
function createBinaryDecodingEnigma() {
    const binaryDecoding = document.createElement('div');
    binaryDecoding.classList.add('binary-decoding');
    binaryDecoding.style.display = 'none'; // Initially hidden
    binaryDecoding.innerHTML = `
        <h2>Enigma 1: Decoding</h2>
        <p>The code below contains a message. Extract the signal from the noise.</p>
        
        <div class="code-container">
            <pre id="binary-code">00-xx-01110100 $&01101000 [01100101] <01110010> 11001010 01-01-01100101 = 01-01-01101001 -01110011-
%^&01101110 010110111 0110-xx-0111 110000100 ???
!@#01110011 <01110000> 0x01101111 -xx-01101111 &+*01101110</pre>
            <p class="hint">Hint: Remove the noise, reverse where needed, and organize the bits.</p>
        </div>
        
        <div class="input-container">
            <input type="text" id="binary-answer" placeholder="Type the decoded message...">
            <button id="check-binary">Verify</button>
        </div>
        <div id="binary-feedback" class="feedback"></div>
    `;
    
    document.querySelector('.terminal-content').appendChild(binaryDecoding);
    
    // Add verification and effects after the element is added to DOM
    setTimeout(() => {
        const checkButton = document.getElementById('check-binary');
        const answerInput = document.getElementById('binary-answer');
        const feedback = document.getElementById('binary-feedback');
        
        // The correct answer is "there is no spoon" - a Matrix reference
        const correctAnswer = "there is no spoon";
        
        // Add a visual effect to the binary code to make it look more mysterious
        const binaryElement = document.getElementById('binary-code');
        if (binaryElement) {
            const originalText = binaryElement.textContent;
            
            // Occasionally add a glitch effect to the binary display
            let glitchInterval;
            
            function startGlitchEffect() {
                if (glitchInterval) clearInterval(glitchInterval);
                
                glitchInterval = setInterval(() => {
                    if (Math.random() < 0.3) { // 30% chance of glitch
                        const glitchDuration = 100 + Math.random() * 200;
                        
                        // Create glitched text
                        const glitchedText = originalText.split('').map(char => {
                            if (char === '0' || char === '1') {
                                return Math.random() < 0.1 ? (char === '0' ? '1' : '0') : char;
                            }
                            return char;
                        }).join('');
                        
                        binaryElement.textContent = glitchedText;
                        
                        // Reset after glitch duration
                        setTimeout(() => {
                            binaryElement.textContent = originalText;
                        }, glitchDuration);
                    }
                }, 2000); // Check for glitch every 2 seconds
            }
            
            startGlitchEffect();
        }
        
        checkButton.addEventListener('click', function() {
            checkBinaryAnswer();
        });
        
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkBinaryAnswer();
            }
        });
        
        function checkBinaryAnswer() {
            const userAnswer = answerInput.value.trim().toLowerCase();
            
            if (userAnswer === correctAnswer) {
                feedback.textContent = "Correct! Moving to the next challenge...";
                feedback.classList.add('success');
                feedback.classList.remove('error');
                
                setTimeout(() => {
                    document.querySelector('.binary-decoding').style.display = 'none';
                    document.querySelector('.fraud-analysis').style.display = 'block';
                }, 2000);
            } else {
                feedback.textContent = "Incorrect answer. Try again.";
                feedback.classList.add('error');
                feedback.classList.remove('success');
            }
        }
    }, 0);
}

// Enigma 2: Fraud Analysis
function createFraudAnalysisEnigma() {
    const fraudAnalysis = document.createElement('div');
    fraudAnalysis.classList.add('fraud-analysis');
    fraudAnalysis.style.display = 'none'; // Initially hidden
    fraudAnalysis.innerHTML = `
        <h2>Enigma 2: Logical Challenge</h2>
        <p>Your team is facing an issue with fraudulent transactions. Analyze the data below:</p>
        
        <div class="code-container">
            <pre id="transaction-data">
{
  "transactions": [
    {"id": "tx_001", "amount": 1250.00, "timestamp": "2023-05-10T14:23:15Z", "merchant": "Tech Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_002", "amount": 50.75, "timestamp": "2023-05-10T14:25:30Z", "merchant": "Café Express", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_003", "amount": 2499.99, "timestamp": "2023-05-10T14:30:45Z", "merchant": "Electronics Shop", "card_present": false, "ip_location": "Rio de Janeiro", "device": "Windows"},
    {"id": "tx_004", "amount": 5000.00, "timestamp": "2023-05-10T14:32:10Z", "merchant": "Jewelry Store", "card_present": false, "ip_location": "New York", "device": "Linux"},
    {"id": "tx_005", "amount": 149.90, "timestamp": "2023-05-10T14:40:22Z", "merchant": "Online Games", "card_present": false, "ip_location": "São Paulo", "device": "Android"},
    {"id": "tx_006", "amount": 3599.99, "timestamp": "2023-05-10T15:05:11Z", "merchant": "Premium Store", "card_present": false, "ip_location": "Tokyo", "device": "iOS"},
    {"id": "tx_007", "amount": 25.50, "timestamp": "2023-05-10T15:10:30Z", "merchant": "Coffee Shop", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_008", "amount": 89.90, "timestamp": "2023-05-10T15:22:12Z", "merchant": "Bookstore", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_009", "amount": 399.99, "timestamp": "2023-05-10T15:38:45Z", "merchant": "Shoe Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_010", "amount": 129.50, "timestamp": "2023-05-10T16:01:17Z", "merchant": "Pharmacy", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_011", "amount": 549.99, "timestamp": "2023-05-10T16:14:29Z", "merchant": "Clothing Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_012", "amount": 78.40, "timestamp": "2023-05-10T16:30:02Z", "merchant": "Grocery Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_013", "amount": 1999.99, "timestamp": "2023-05-10T16:45:21Z", "merchant": "Computer Parts", "card_present": false, "ip_location": "São Paulo", "device": "MacOS"},
    {"id": "tx_014", "amount": 45.00, "timestamp": "2023-05-10T17:02:33Z", "merchant": "Fast Food", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_015", "amount": 149.00, "timestamp": "2023-05-10T17:23:10Z", "merchant": "Pet Shop", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_016", "amount": 2100.00, "timestamp": "2023-05-10T17:40:42Z", "merchant": "Furniture Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_017", "amount": 59.99, "timestamp": "2023-05-10T18:11:05Z", "merchant": "Movie Tickets", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_018", "amount": 349.90, "timestamp": "2023-05-10T18:33:27Z", "merchant": "Sporting Goods", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_019", "amount": 199.50, "timestamp": "2023-05-10T18:50:19Z", "merchant": "Beauty Salon", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_020", "amount": 79.99, "timestamp": "2023-05-10T19:12:37Z", "merchant": "Book Club Subscription", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_021", "amount": 32.50, "timestamp": "2023-05-10T19:30:04Z", "merchant": "Ice Cream Shop", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_022", "amount": 1750.00, "timestamp": "2023-05-10T19:47:29Z", "merchant": "Dentist", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_023", "amount": 179.90, "timestamp": "2023-05-10T20:11:11Z", "merchant": "Home Decor", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_024", "amount": 89.99, "timestamp": "2023-05-10T20:25:50Z", "merchant": "Online Games", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_025", "amount": 1899.99, "timestamp": "2023-05-10T20:40:13Z", "merchant": "Smartphone Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_026", "amount": 35.75, "timestamp": "2023-05-10T21:01:27Z", "merchant": "Pizza Delivery", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_027", "amount": 299.99, "timestamp": "2023-05-10T21:22:49Z", "merchant": "Fitness Equipment", "card_present": false, "ip_location": "São Paulo", "device": "MacOS"},
    {"id": "tx_028", "amount": 129.90, "timestamp": "2023-05-10T21:43:15Z", "merchant": "Music Store", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_029", "amount": 22.50, "timestamp": "2023-05-11T08:15:30Z", "merchant": "Café Express", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_030", "amount": 499.99, "timestamp": "2023-05-11T09:30:42Z", "merchant": "Fashion Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_031", "amount": 15.99, "timestamp": "2023-05-11T09:50:23Z", "merchant": "Digital Book", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_032", "amount": 249.90, "timestamp": "2023-05-11T10:27:10Z", "merchant": "Headphones", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_033", "amount": 45.00, "timestamp": "2023-05-11T11:12:38Z", "merchant": "Restaurant", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_034", "amount": 3250.00, "timestamp": "2023-05-11T11:45:09Z", "merchant": "Travel Agency", "card_present": false, "ip_location": "São Paulo", "device": "MacOS"},
    {"id": "tx_035", "amount": 59.90, "timestamp": "2023-05-11T12:20:15Z", "merchant": "Car Wash", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_036", "amount": 320.50, "timestamp": "2023-05-11T13:05:30Z", "merchant": "Hardware Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_037", "amount": 1699.99, "timestamp": "2023-05-11T13:40:12Z", "merchant": "Camera Shop", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_038", "amount": 39.99, "timestamp": "2023-05-11T14:10:45Z", "merchant": "Streaming Service", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_039", "amount": 149.50, "timestamp": "2023-05-11T14:33:27Z", "merchant": "Toy Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_040", "amount": 2999.99, "timestamp": "2023-05-11T15:05:19Z", "merchant": "Audio Equipment", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_041", "amount": 62.35, "timestamp": "2023-05-11T15:30:41Z", "merchant": "Grocery Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_042", "amount": 1100.00, "timestamp": "2023-05-11T16:12:33Z", "merchant": "Laptop Repair", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_043", "amount": 87.50, "timestamp": "2023-05-11T16:45:20Z", "merchant": "Florist", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_044", "amount": 3599.99, "timestamp": "2023-05-11T17:10:05Z", "merchant": "Premium Store", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_045", "amount": 29.99, "timestamp": "2023-05-11T17:35:42Z", "merchant": "Mobile App Purchase", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_046", "amount": 439.90, "timestamp": "2023-05-11T18:05:19Z", "merchant": "Perfume Shop", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_047", "amount": 199.99, "timestamp": "2023-05-11T18:30:37Z", "merchant": "Watch Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_048", "amount": 50.00, "timestamp": "2023-05-11T19:00:23Z", "merchant": "Charity Donation", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_049", "amount": 85.75, "timestamp": "2023-05-11T19:30:11Z", "merchant": "Café Express", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_050", "amount": 2800.00, "timestamp": "2023-05-11T19:55:30Z", "merchant": "Electronics Shop", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_051", "amount": 120.50, "timestamp": "2023-05-11T20:15:42Z", "merchant": "Eyewear Store", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_052", "amount": 75.00, "timestamp": "2023-05-11T20:40:23Z", "merchant": "Hair Salon", "card_present": true, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_053", "amount": 1299.99, "timestamp": "2023-05-11T21:05:16Z", "merchant": "Smart Home Devices", "card_present": false, "ip_location": "São Paulo", "device": "MacOS"},
    {"id": "tx_054", "amount": 67.80, "timestamp": "2023-05-11T21:25:09Z", "merchant": "Book Club Subscription", "card_present": false, "ip_location": "São Paulo", "device": "iOS"},
    {"id": "tx_055", "amount": 35.99, "timestamp": "2023-05-11T21:45:33Z", "merchant": "Movie Streaming", "card_present": false, "ip_location": "São Paulo", "device": "iOS"}
  ],
  "user_info": {
    "name": "Maria Silva",
    "location": "São Paulo",
    "usual_devices": ["iOS", "MacOS"],
    "common_merchants": ["Café Express", "Tech Store", "Online Games", "Grocery Store"]
  }
}
            </pre>
        </div>
        
        <p>Use AI to identify the potentially fraudulent transaction and explain why.</p>
        <p>Hint: There are suspicious patterns in the data. The answer is the ID of the suspicious transaction.</p>
        
        <div class="input-container">
            <input type="text" id="fraud-answer" placeholder="Enter the fraudulent transaction ID...">
            <button id="check-fraud">Verify</button>
        </div>
        <div id="fraud-feedback" class="feedback"></div>
    `;
    
    document.querySelector('.terminal-content').appendChild(fraudAnalysis);
    
    // Add verification event after the element is added to DOM
    setTimeout(() => {
        const checkButton = document.getElementById('check-fraud');
        const answerInput = document.getElementById('fraud-answer');
        const feedback = document.getElementById('fraud-feedback');
        
        const correctAnswer = "tx_004";
        
        checkButton.addEventListener('click', function() {
            checkFraudAnswer();
        });
        
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkFraudAnswer();
            }
        });
        
        function checkFraudAnswer() {
            const userAnswer = answerInput.value.trim().toLowerCase();
            
            if (userAnswer === correctAnswer) {
                feedback.textContent = "Correct! Moving to the final challenge...";
                feedback.classList.add('success');
                feedback.classList.remove('error');
                
                setTimeout(() => {
                    document.querySelector('.fraud-analysis').style.display = 'none';
                    document.querySelector('.enigma-3').style.display = 'block';
                }, 2000);
            } else {
                feedback.textContent = "Incorrect answer. Analyze the data again.";
                feedback.classList.add('error');
                feedback.classList.remove('success');
            }
        }
    }, 0);
}

// Create Enigma 3 page
function createEnigma3Page() {
    const enigma3 = document.createElement('div');
    enigma3.classList.add('enigma-3');
    enigma3.style.display = 'none';
    enigma3.innerHTML = `
        <h2>Enigma 3: Cybernetic Logic</h2>
        <p>Decrypt the pattern in this digital maze.</p>
        
        <div id="matrix-puzzle" class="matrix-puzzle">
            <canvas id="puzzle-canvas" width="500" height="400"></canvas>
        </div>
        
        <div class="input-container">
            <input type="text" id="enigma3-answer" placeholder="Enter the solution...">
            <button id="check-enigma3">Verify</button>
        </div>
        <div id="enigma3-feedback" class="feedback"></div>
    `;
    
    document.querySelector('.terminal-content').appendChild(enigma3);
    
    // Add verification event and initialize puzzle
    setTimeout(() => {
        initMatrixPuzzle();
        
        const checkButton = document.getElementById('check-enigma3');
        const answerInput = document.getElementById('enigma3-answer');
        const feedback = document.getElementById('enigma3-feedback');
        
        // The correct answer is 42 - "The Answer to the Ultimate Question of Life, the Universe, and Everything"
        const correctAnswer = "42";
        
        checkButton.addEventListener('click', function() {
            checkEnigma3Answer();
        });
        
        answerInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkEnigma3Answer();
            }
        });
        
        function checkEnigma3Answer() {
            const userAnswer = answerInput.value.trim().toLowerCase();
            
            if (userAnswer === correctAnswer) {
                feedback.textContent = "Congratulations! You've completed the challenge!";
                feedback.classList.add('success');
                feedback.classList.remove('error');
                
                setTimeout(() => {
                    document.querySelector('.enigma-3').style.display = 'none';
                    document.querySelector('.final-form').style.display = 'block';
                }, 2000);
            } else {
                feedback.textContent = "Incorrect answer. Try again.";
                feedback.classList.add('error');
                feedback.classList.remove('success');
            }
        }
    }, 0);
}

// Initialize Matrix puzzle
function initMatrixPuzzle() {
    const canvas = document.getElementById('puzzle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Draw puzzle background
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    
    // Draw grid
    ctx.strokeStyle = "#3a86ff";
    ctx.lineWidth = 0.8;
    
    const gridSize = 6;
    const cellWidth = width / gridSize;
    const cellHeight = height / gridSize;
    
    // Draw horizontal and vertical lines to create the grid
    for (let i = 0; i <= gridSize; i++) {
        ctx.beginPath();
        ctx.moveTo(0, i * cellHeight);
        ctx.lineTo(width, i * cellHeight);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(i * cellWidth, 0);
        ctx.lineTo(i * cellWidth, height);
        ctx.stroke();
    }
    
    // Define the pattern data for the grid - operations and values
    const gridData = [
        [{val: 6, op: "+"}, {val: 2, op: "*"}, {val: 5, op: "-"}, {val: 2, op: "/"}, {val: 3, op: "+"}, {val: 2, op: "*"}],
        [{val: 3, op: "-"}, {val: 4, op: "+"}, {val: 2, op: "*"}, {val: 2, op: "+"}, {val: 3, op: "-"}, {val: 2, op: "/"}],
        [{val: 2, op: "/"}, {val: 0, op: "-"}, {val: 0, op: "+"}, {val: 1, op: "*"}, {val: 2, op: "+"}, {val: 5, op: "-"}],
        [{val: 3, op: "*"}, {val: 0, op: "+"}, {val: 1, op: "/"}, {val: 0, op: "-"}, {val: 3, op: "+"}, {val: 2, op: "*"}],
        [{val: 2, op: "+"}, {val: 1, op: "/"}, {val: 0, op: "-"}, {val: 1, op: "*"}, {val: 0, op: "+"}, {val: 1, op: "-"}],
        [{val: 2, op: "*"}, {val: 4, op: "+"}, {val: 2, op: "/"}, {val: 2, op: "-"}, {val: 2, op: "+"}, {val: 1, op: "*"}]
    ];
    
    // The sequence of cells to follow - spiral from outside to center
    const pathSequence = [
        {row: 0, col: 0}, {row: 0, col: 1}, {row: 0, col: 2}, {row: 0, col: 3}, {row: 0, col: 4}, {row: 0, col: 5},
        {row: 1, col: 5}, {row: 2, col: 5}, {row: 3, col: 5}, {row: 4, col: 5}, {row: 5, col: 5},
        {row: 5, col: 4}, {row: 5, col: 3}, {row: 5, col: 2}, {row: 5, col: 1}, {row: 5, col: 0},
        {row: 4, col: 0}, {row: 3, col: 0}, {row: 2, col: 0}, {row: 1, col: 0},
        {row: 1, col: 1}, {row: 1, col: 2}, {row: 1, col: 3}, {row: 1, col: 4},
        {row: 2, col: 4}, {row: 3, col: 4}, {row: 4, col: 4},
        {row: 4, col: 3}, {row: 4, col: 2}, {row: 4, col: 1},
        {row: 3, col: 1}, {row: 2, col: 1},
        {row: 2, col: 2}, {row: 2, col: 3},
        {row: 3, col: 3}, {row: 3, col: 2}
    ];
    
    // Color palette
    const colors = {
        path: "#ff006e",
        value: "#8338ec",
        operation: "#fb5607",
        coordinates: "#ffbe0b",
        hint: "#3a86ff",
        background: "#000814",
        stepNumber: "#06d6a0"
    };
    
    // Draw a more visible background for the path first
    for (let i = 0; i < pathSequence.length; i++) {
        const pos = pathSequence[i];
        
        // Highlight cell background to show the path
        ctx.fillStyle = `rgba(255, 0, 110, 0.08)`;
        ctx.fillRect(
            pos.col * cellWidth + 1,
            pos.row * cellHeight + 1,
            cellWidth - 2,
            cellHeight - 2
        );
    }
    
    // Draw the grid values with colors
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const centerX = col * cellWidth + cellWidth / 2;
            const centerY = row * cellHeight + cellHeight / 2;
            
            const cell = gridData[row][col];
            
            // Draw value with one color
            ctx.fillStyle = colors.value;
            ctx.font = "16px monospace";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(cell.val.toString(), centerX, centerY - 8);
            
            // Draw operation with different color
            ctx.fillStyle = colors.operation;
            ctx.font = "14px monospace";
            ctx.fillText(cell.op, centerX, centerY + 8);
            
            // Find if this cell is in the path and get its index
            const pathIndex = pathSequence.findIndex(pos => pos.row === row && pos.col === col);
            
            // If it's in the path, draw a small step number in the corner instead of coordinates
            if (pathIndex !== -1) {
                ctx.fillStyle = colors.stepNumber;
                ctx.font = "10px monospace";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText(`${pathIndex + 1}`, col * cellWidth + 3, row * cellHeight + 3);
            } else {
                // Draw subtle coordinates for cells not in the path
                ctx.fillStyle = "rgba(255, 190, 11, 0.3)";
                ctx.font = "9px monospace";
                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillText(`${col},${row}`, col * cellWidth + 2, row * cellHeight + 2);
            }
        }
    }
    
    // Draw path connections - a subtle spiral pattern with thicker lines
    ctx.strokeStyle = colors.path;
    ctx.lineWidth = 1.5;
    
    // Draw lines connecting the path
    for (let i = 0; i < pathSequence.length - 1; i++) {
        const start = pathSequence[i];
        const end = pathSequence[i + 1];
        
        const startX = start.col * cellWidth + cellWidth / 2;
        const startY = start.row * cellHeight + cellHeight / 2;
        const endX = end.col * cellWidth + cellWidth / 2;
        const endY = end.row * cellHeight + cellHeight / 2;
        
        // Draw arrowhead to show direction
        const angle = Math.atan2(endY - startY, endX - startX);
        const arrowLength = 6;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Draw a small circle at the start of each segment
        if (i === 0) {
            ctx.fillStyle = colors.path;
            ctx.beginPath();
            ctx.arc(startX, startY, 3, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Add a small dot to indicate direction in the middle of each line
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(midX, midY, 1, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Add explanatory hint text
    ctx.fillStyle = colors.hint;
    ctx.font = "11px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText("Follow the numbered path (1→36). Start with 0 and apply each operation to calculate the answer.", width / 2, height - 5);
    
    // Create flicker effect on random cells to suggest digital instability
    setInterval(() => {
        // Choose a random cell
        const randomRow = Math.floor(Math.random() * gridSize);
        const randomCol = Math.floor(Math.random() * gridSize);
        
        const centerX = randomCol * cellWidth + cellWidth / 2;
        const centerY = randomRow * cellHeight + cellHeight / 2;
        
        // Clear cell
        ctx.fillStyle = colors.background;
        ctx.fillRect(
            randomCol * cellWidth + 1,
            randomRow * cellHeight + 1,
            cellWidth - 2,
            cellHeight - 2
        );
        
        // Redraw with a glitch effect
        const cell = gridData[randomRow][randomCol];
        
        // Flash effect
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.2})`;
        ctx.fillRect(
            randomCol * cellWidth + 1,
            randomRow * cellHeight + 1,
            cellWidth - 2,
            cellHeight - 2
        );
        
        // Redraw value
        ctx.fillStyle = colors.value;
        ctx.font = "16px monospace";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(cell.val.toString(), centerX, centerY - 8);
        
        // Redraw operation
        ctx.fillStyle = colors.operation;
        ctx.font = "14px monospace";
        ctx.fillText(cell.op, centerX, centerY + 8);
        
        // Find if this cell is in the path and get its index
        const pathIndex = pathSequence.findIndex(pos => pos.row === randomRow && pos.col === randomCol);
        
        // If it's in the path, redraw the step number
        if (pathIndex !== -1) {
            ctx.fillStyle = colors.stepNumber;
            ctx.font = "10px monospace";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText(`${pathIndex + 1}`, randomCol * cellWidth + 3, randomRow * cellHeight + 3);
        } else {
            // Redraw coordinates for cells not in the path
            ctx.fillStyle = "rgba(255, 190, 11, 0.3)";
            ctx.font = "9px monospace";
            ctx.textAlign = "left";
            ctx.textBaseline = "top";
            ctx.fillText(`${randomCol},${randomRow}`, randomCol * cellWidth + 2, randomRow * cellHeight + 2);
        }
        
        // Occasionally add a subtle digital artifact
        if (Math.random() < 0.1) {
            ctx.fillStyle = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.3)`;
            ctx.fillRect(
                randomCol * cellWidth + Math.random() * cellWidth / 2,
                randomRow * cellHeight + Math.random() * cellHeight / 2,
                2,
                2
            );
        }
    }, 200);
    
    // Add a subtle, occasional flash across the screen
    setInterval(() => {
        if (Math.random() < 0.05) {
            ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
            ctx.fillRect(0, 0, width, height);
            
            // Re-emphasize the spiral pattern
            setTimeout(() => {
                // Redraw path connections
                ctx.strokeStyle = colors.path;
                ctx.lineWidth = 1.5;
                
                for (let i = 0; i < pathSequence.length - 1; i++) {
                    const start = pathSequence[i];
                    const end = pathSequence[i + 1];
                    
                    const startX = start.col * cellWidth + cellWidth / 2;
                    const startY = start.row * cellHeight + cellHeight / 2;
                    const endX = end.col * cellWidth + cellWidth / 2;
                    const endY = end.row * cellHeight + cellHeight / 2;
                    
                    ctx.beginPath();
                    ctx.moveTo(startX, startY);
                    ctx.lineTo(endX, endY);
                    ctx.stroke();
                    
                    // Add a small dot to indicate direction
                    const midX = (startX + endX) / 2;
                    const midY = (startY + endY) / 2;
                    
                    ctx.fillStyle = "#ffffff";
                    ctx.beginPath();
                    ctx.arc(midX, midY, 1, 0, Math.PI * 2);
                    ctx.fill();
                }
            }, 50);
        }
    }, 3000);
}

// Create the final form
function createFinalForm() {
    const finalForm = document.createElement('div');
    finalForm.classList.add('final-form');
    finalForm.innerHTML = `
        <h2>Congratulations!</h2>
        <p>You've completed all three enigmas of Nimbus 1337.</p>
        <p>Please provide your information to register your achievement:</p>
        
        <form id="submission-form" action="https://formspree.io/f/mwpbpooo" method="POST">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
            
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required>
            </div>
            
            <div class="form-group">
                <label for="linkedin">LinkedIn</label>
                <input type="url" id="linkedin" name="linkedin">
            </div>
            
            <div class="form-group">
                <label for="message">Your experience with the challenge</label>
                <textarea id="message" name="message"></textarea>
            </div>
            
            <input type="hidden" name="enigmas_completed" value="3">
            
            <button type="submit" class="submit-btn">Submit</button>
        </form>
    `;
    
    document.querySelector('.terminal-content').appendChild(finalForm);
    
    // Add submission event
    setTimeout(() => {
        const form = document.getElementById('submission-form');
        
        form.addEventListener('submit', function(e) {
            // Form is handled by Formspree
        });
    }, 0);
} 