
        // Game state
        let gameState = {
            points: 0,
            level: 1,
            badges: 0,
            streak: 0,
            currentModule: null,
            currentQuestionIndex: 0,
            moduleProgress: {}
        };

        // Educational modules
        const modules = [
            {
                id: 'climate-change',
                title: '🌡️ Climate Change',
                description: 'Learn about global warming, greenhouse gases, and climate science fundamentals.',
                questions: [
                    {
                        question: 'What is the primary cause of recent climate change?',
                        options: [
                            'Natural climate cycles',
                            'Human activities releasing greenhouse gases',
                            'Solar radiation changes',
                            'Ocean currents'
                        ],
                        correct: 1,
                        explanation: 'Scientific consensus shows that human activities, particularly burning fossil fuels, are the primary driver of recent climate change.'
                    },
                    {
                        question: 'Which gas contributes most to the greenhouse effect?',
                        options: [
                            'Carbon dioxide (CO2)',
                            'Methane (CH4)',
                            'Nitrous oxide (N2O)',
                            'Water vapor (H2O)'
                        ],
                        correct: 0,
                        explanation: 'While water vapor is the most abundant greenhouse gas, CO2 is the most significant human-contributed greenhouse gas.'
                    },
                    {
                        question: 'What is the current global average temperature increase since pre-industrial times?',
                        options: [
                            'About 0.5°C',
                            'About 1.1°C',
                            'About 2.0°C',
                            'About 3.0°C'
                        ],
                        correct: 1,
                        explanation: 'Global temperatures have risen approximately 1.1°C since the late 1800s, with most warming occurring in the past 40 years.'
                    }
                ]
            },
            {
                id: 'renewable-energy',
                title: '⚡ Renewable Energy',
                description: 'Explore solar, wind, hydro, and other sustainable energy sources.',
                questions: [
                    {
                        question: 'Which renewable energy source has the fastest growing capacity worldwide?',
                        options: [
                            'Hydroelectric power',
                            'Solar photovoltaic',
                            'Wind power',
                            'Geothermal energy'
                        ],
                        correct: 1,
                        explanation: 'Solar photovoltaic capacity has been growing exponentially due to falling costs and technological improvements.'
                    },
                    {
                        question: 'What percentage of global electricity could renewables theoretically provide?',
                        options: [
                            'Around 25%',
                            'Around 50%',
                            'Around 75%',
                            'Over 100%'
                        ],
                        correct: 3,
                        explanation: 'Renewable energy resources are abundant enough to supply global electricity demand many times over.'
                    },
                    {
                        question: 'Which country leads in total renewable energy capacity?',
                        options: [
                            'United States',
                            'Germany',
                            'China',
                            'India'
                        ],
                        correct: 2,
                        explanation: 'China has the largest renewable energy capacity, though other countries may have higher per-capita adoption.'
                    }
                ]
            },
            {
                id: 'biodiversity',
                title: '🐝 Biodiversity & Ecosystems',
                description: 'Understand the importance of species diversity and ecosystem health.',
                questions: [
                    {
                        question: 'Approximately how many species are estimated to exist on Earth?',
                        options: [
                            '1-2 million',
                            '8-10 million',
                            '50-100 million',
                            '200+ million'
                        ],
                        correct: 1,
                        explanation: 'Scientists estimate there are 8-10 million species on Earth, though only about 1.5 million have been formally described.'
                    },
                    {
                        question: 'What is the current rate of species extinction compared to natural background rates?',
                        options: [
                            '2-5 times faster',
                            '10-20 times faster',
                            '100-1,000 times faster',
                            '10,000+ times faster'
                        ],
                        correct: 2,
                        explanation: 'Current extinction rates are 100-1,000 times higher than natural background rates, indicating a biodiversity crisis.'
                    },
                    {
                        question: 'Which ecosystem type has the highest biodiversity?',
                        options: [
                            'Temperate forests',
                            'Grasslands',
                            'Tropical rainforests',
                            'Arctic tundra'
                        ],
                        correct: 2,
                        explanation: 'Tropical rainforests contain more than half of all known terrestrial species despite covering less than 7% of land.'
                    }
                ]
            },
            {
                id: 'waste-management',
                title: '♻️ Waste & Recycling',
                description: 'Learn about waste reduction, recycling, and circular economy principles.',
                questions: [
                    {
                        question: 'How long does it take for a plastic bottle to decompose in a landfill?',
                        options: [
                            '10-20 years',
                            '50-100 years',
                            '200-500 years',
                            '450-1000 years'
                        ],
                        correct: 3,
                        explanation: 'Plastic bottles can take 450-1000 years to decompose, making recycling and reduction crucial.'
                    },
                    {
                        question: 'What does the "3 Rs" of waste management stand for?',
                        options: [
                            'Recycle, Reuse, Reduce',
                            'Reduce, Reuse, Recycle',
                            'Reuse, Reduce, Recycle',
                            'Reduce, Recycle, Reuse'
                        ],
                        correct: 1,
                        explanation: 'The 3 Rs are ordered by priority: Reduce (first priority), Reuse, then Recycle.'
                    },
                    {
                        question: 'Which material can be recycled indefinitely without quality loss?',
                        options: [
                            'Paper',
                            'Plastic',
                            'Glass',
                            'Aluminum'
                        ],
                        correct: 3,
                        explanation: 'Aluminum can be recycled infinitely without losing quality, making it one of the most sustainable materials.'
                    }
                ]
            },
            {
                id: 'sustainable-living',
                title: '🏡 Sustainable Living',
                description: 'Discover practical ways to reduce your environmental footprint.',
                questions: [
                    {
                        question: 'Which action has the biggest impact on reducing personal carbon footprint?',
                        options: [
                            'Using LED light bulbs',
                            'Reducing meat consumption',
                            'Taking shorter showers',
                            'Recycling more'
                        ],
                        correct: 1,
                        explanation: 'Animal agriculture is responsible for significant greenhouse gas emissions, making dietary changes very impactful.'
                    },
                    {
                        question: 'How much water can a leaky faucet waste per year?',
                        options: [
                            '100-500 gallons',
                            '1,000-2,000 gallons',
                            '3,000-5,000 gallons',
                            '8,000-10,000 gallons'
                        ],
                        correct: 2,
                        explanation: 'A single leaky faucet can waste over 3,000 gallons per year - enough for 180 showers!'
                    },
                    {
                        question: 'What percentage of household energy use typically goes to heating and cooling?',
                        options: [
                            '20-30%',
                            '40-50%',
                            '60-70%',
                            '80-90%'
                        ],
                        correct: 1,
                        explanation: 'Heating and cooling account for about 48% of home energy use, making efficiency improvements very valuable.'
                    }
                ]
            },
            {
                id: 'water-conservation',
                title: '💧 Water Conservation',
                description: 'Learn about water cycles, conservation methods, and water quality.',
                questions: [
                    {
                        question: 'What percentage of Earth\'s water is fresh water?',
                        options: [
                            'About 1%',
                            'About 3%',
                            'About 10%',
                            'About 25%'
                        ],
                        correct: 1,
                        explanation: 'Only about 3% of Earth\'s water is fresh water, and most of that is frozen in glaciers and ice caps.'
                    },
                    {
                        question: 'Which uses more water: a 10-minute shower or filling a bathtub?',
                        options: [
                            'The shower uses more',
                            'The bathtub uses more',
                            'They use about the same',
                            'It depends on the showerhead'
                        ],
                        correct: 1,
                        explanation: 'A typical bathtub holds 30-50 gallons, while a 10-minute shower with a standard showerhead uses about 25 gallons.'
                    },
                    {
                        question: 'How much water does it take to produce one pound of beef?',
                        options: [
                            '100-300 gallons',
                            '500-800 gallons',
                            '1,000-1,500 gallons',
                            '1,800-2,500 gallons'
                        ],
                        correct: 3,
                        explanation: 'It takes approximately 1,800-2,500 gallons of water to produce one pound of beef, highlighting the water footprint of our food choices.'
                    }
                ]
            }
        ];

        // Initialize progress for all modules
        modules.forEach(module => {
            gameState.moduleProgress[module.id] = {
                completed: 0,
                total: module.questions.length,
                unlocked: true
            };
        });

        // Eco tips array
        const ecoTips = [
            "🌱 Plant native species in your garden - they require less water and support local wildlife!",
            "🚲 Bike or walk for trips under 2 miles - it's great exercise and reduces emissions!",
            "🍃 Use both sides of paper before recycling to maximize resource efficiency.",
            "💡 LED bulbs use 75% less energy and last 25 times longer than incandescent bulbs.",
            "🚿 A 5-minute shower uses about 12 gallons less water than a 10-minute shower.",
            "📱 Charge your devices during the day when renewable energy production peaks.",
            "🥗 Try 'Meatless Monday' - reducing meat consumption just one day per week makes a difference!",
            "🌡️ Set your thermostat 2 degrees lower in winter and higher in summer to save energy.",
            "🛒 Bring reusable bags when shopping - one plastic bag can take 500+ years to decompose.",
            "🔌 Unplug electronics when not in use - they can draw power even when turned off!"
        ];

        function initializeApp() {
            renderModules();
            updateStats();
            updateDailyTip();
            
            // Load saved progress
            const saved = localStorage.getItem('ecoLearnProgress');
            if (saved) {
                try {
                    const savedState = JSON.parse(saved);
                    gameState = { ...gameState, ...savedState };
                    updateStats();
                } catch (e) {
                    console.log('Could not load saved progress');
                }
            }
        }

        function renderModules() {
            const grid = document.getElementById('modulesGrid');
            grid.innerHTML = '';

            modules.forEach(module => {
                const progress = gameState.moduleProgress[module.id];
                const completionRate = Math.round((progress.completed / progress.total) * 100);
                
                const card = document.createElement('div');
                card.className = 'module-card';
                card.onclick = () => startModule(module.id);
                
                card.innerHTML = `
                    <div class="module-title">${module.title}</div>
                    <div class="module-description">${module.description}</div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${completionRate}%"></div>
                    </div>
                    <div class="module-stats">
                        <span>${progress.completed}/${progress.total} completed</span>
                        <span>${completionRate}% progress</span>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        function startModule(moduleId) {
            const module = modules.find(m => m.id === moduleId);
            if (!module) return;

            gameState.currentModule = module;
            gameState.currentQuestionIndex = 0;
            
            document.getElementById('modulesGrid').style.display = 'none';
            document.querySelector('.leaderboard').style.display = 'none';
            document.querySelector('.eco-tips').style.display = 'none';
            document.getElementById('quizContainer').classList.add('active');
            
            showQuestion();
        }

        function showQuestion() {
            const module = gameState.currentModule;
            const question = module.questions[gameState.currentQuestionIndex];
            const container = document.getElementById('quizContent');
            
            container.innerHTML = `
                <div class="question">
                    <h3>Question ${gameState.currentQuestionIndex + 1} of ${module.questions.length}</h3>
                    <h3>${question.question}</h3>
                    <div class="options">
                        ${question.options.map((option, index) => `
                            <div class="option" onclick="selectOption(${index})" data-index="${index}">
                                ${option}
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            document.getElementById('submitBtn').disabled = true;
            document.getElementById('nextBtn').style.display = 'none';
            gameState.selectedOption = null;
        }

        function selectOption(index) {
            // Clear previous selections
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            // Select current option
            document.querySelector(`[data-index="${index}"]`).classList.add('selected');
            gameState.selectedOption = index;
            document.getElementById('submitBtn').disabled = false;
        }

        function submitAnswer() {
            if (gameState.selectedOption === null) return;
            
            const question = gameState.currentModule.questions[gameState.currentQuestionIndex];
            const isCorrect = gameState.selectedOption === question.correct;
            
            // Show correct/incorrect styling
            document.querySelectorAll('.option').forEach((opt, index) => {
                opt.onclick = null; // Disable clicking
                if (index === question.correct) {
                    opt.classList.add('correct');
                } else if (index === gameState.selectedOption && !isCorrect) {
                    opt.classList.add('incorrect');
                }
            });
            
            // Award points and show feedback
            if (isCorrect) {
                gameState.points += 100;
                showAchievement(`Correct! +100 points`);
                updateModuleProgress();
            } else {
                showAchievement(`Incorrect. The correct answer was: ${question.options[question.correct]}`);
            }
            
            // Show explanation
            const explanationDiv = document.createElement('div');
            explanationDiv.style.cssText = `
                background: #f8f9fa; 
                padding: 15px; 
                border-radius: 10px; 
                margin-top: 15px; 
                border-left: 4px solid #43cea2;
            `;
            explanationDiv.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
            document.querySelector('.question').appendChild(explanationDiv);
            
            document.getElementById('submitBtn').style.display = 'none';
            document.getElementById('nextBtn').style.display = 'inline-block';
            
            updateStats();
        }

        function nextQuestion() {
            gameState.currentQuestionIndex++;
            
            if (gameState.currentQuestionIndex >= gameState.currentModule.questions.length) {
                completeModule();
            } else {
                showQuestion();
            }
        }

        function updateModuleProgress() {
            const moduleId = gameState.currentModule.id;
            if (gameState.moduleProgress[moduleId]) {
                gameState.moduleProgress[moduleId].completed = Math.max(
                    gameState.moduleProgress[moduleId].completed,
                    gameState.currentQuestionIndex + 1
                );
            }
        }

        function completeModule() {
            const moduleId = gameState.currentModule.id;
            const progress = gameState.moduleProgress[moduleId];
            
            if (progress.completed === progress.total) {
                gameState.badges++;
                gameState.points += 500; // Completion bonus
                showAchievement(`🏆 Module Complete! +500 bonus points! You earned a ${gameState.currentModule.title} badge!`);
            }
            
            // Check for level up
            const newLevel = Math.floor(gameState.points / 1000) + 1;
            if (newLevel > gameState.level) {
                gameState.level = newLevel;
                showAchievement(`🎉 Level Up! You're now level ${gameState.level}!`);
            }
            
            backToModules();
        }

        function backToModules() {
            document.getElementById('quizContainer').classList.remove('active');
            document.getElementById('modulesGrid').style.display = 'grid';
            document.querySelector('.leaderboard').style.display = 'block';
            document.querySelector('.eco-tips').style.display = 'block';
            
            gameState.currentModule = null;
            renderModules();
            updateStats();
            saveProgress();
        }

        function updateStats() {
            document.getElementById('totalPoints').textContent = gameState.points.toLocaleString();
            document.getElementById('level').textContent = gameState.level;
            document.getElementById('badges').textContent = gameState.badges;
            document.getElementById('streak').textContent = gameState.streak;
            document.getElementById('userPoints').textContent = gameState.points.toLocaleString();
        }

        function showAchievement(message) {
            const achievement = document.createElement('div');
            achievement.className = 'achievement';
            achievement.textContent = message;
            
            document.body.appendChild(achievement);
            
            setTimeout(() => {
                achievement.remove();
            }, 4000);
        }

        function updateDailyTip() {
            const today = new Date().getDate();
            const tipIndex = today % ecoTips.length;
            document.getElementById('dailyTip').textContent = ecoTips[tipIndex];
        }

        function showAchievements() {
            const achievements = [
                { name: '🌱 First Steps', desc: 'Complete your first quiz', earned: gameState.points > 0 },
                { name: '📚 Knowledge Seeker', desc: 'Answer 10 questions correctly', earned: gameState.points >= 1000 },
                { name: '🏆 Expert', desc: 'Complete 3 modules', earned: gameState.badges >= 3 },
                { name: '🌟 Eco Champion', desc: 'Reach level 5', earned: gameState.level >= 5 },
                { name: '💚 Green Warrior', desc: 'Score 5000+ points', earned: gameState.points >= 5000 },
                { name: '🔥 Streak Master', desc: 'Maintain a 7-day streak', earned: gameState.streak >= 7 }
            ];

            let achievementHtml = '<h3>🏅 Your Achievements</h3><div style="display: grid; gap: 15px; margin-top: 20px;">';
            
            achievements.forEach(achievement => {
                const earnedClass = achievement.earned ? 'earned' : 'locked';
                const opacity = achievement.earned ? '1' : '0.5';
                achievementHtml += `
                    <div style="background: ${achievement.earned ? 'linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%)' : '#f8f9fa'}; 
                                padding: 15px; border-radius: 10px; opacity: ${opacity};">
                        <strong>${achievement.name}</strong><br>
                        <small>${achievement.desc}</small>
                        ${achievement.earned ? ' ✅' : ' 🔒'}
                    </div>
                `;
            });
            
            achievementHtml += '</div>';
            
            // Create modal
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.5); display: flex; align-items: center; 
                justify-content: center; z-index: 1000;
            `;
            
            const content = document.createElement('div');
            content.style.cssText = `
                background: white; padding: 30px; border-radius: 20px; 
                max-width: 500px; width: 90%; max-height: 80%; overflow-y: auto;
            `;
            content.innerHTML = achievementHtml + '<button class="btn" onclick="this.closest(\'.modal\').remove()" style="margin-top: 20px;">Close</button>';
            
            modal.className = 'modal';
            modal.appendChild(content);
            document.body.appendChild(modal);
        }

        function saveProgress() {
            try {
                localStorage.setItem('ecoLearnProgress', JSON.stringify(gameState));
            } catch (e) {
                console.log('Could not save progress');
            }
        }

        // Challenge system
        function generateDailyChallenges() {
            const challenges = [
                { text: 'Take a 5-minute shorter shower today', points: 50, type: 'water' },
                { text: 'Use public transport or bike instead of driving', points: 100, type: 'transport' },
                { text: 'Eat one plant-based meal', points: 75, type: 'food' },
                { text: 'Recycle 3 items properly', points: 40, type: 'waste' },
                { text: 'Turn off all unnecessary lights for 2 hours', points: 60, type: 'energy' },
                { text: 'Learn about one endangered species', points: 80, type: 'biodiversity' }
            ];
            
            const today = new Date().getDate();
            return challenges[today % challenges.length];
        }

        // Add daily challenge to the page
        function addDailyChallenge() {
            const challenge = generateDailyChallenges();
            const challengeDiv = document.createElement('div');
            challengeDiv.className = 'eco-tips';
            challengeDiv.innerHTML = `
                <h3>🎯 Daily Challenge</h3>
                <div class="eco-tip">
                    <strong>${challenge.text}</strong><br>
                    <small>Complete for +${challenge.points} points!</small>
                    <button class="btn" onclick="completeChallenge(${challenge.points})" 
                            style="margin-top: 10px; padding: 8px 15px; font-size: 0.9em;">
                        Mark as Complete
                    </button>
                </div>
            `;
            
            document.querySelector('.eco-tips').after(challengeDiv);
        }

        function completeChallenge(points) {
            gameState.points += points;
            gameState.streak++;
            showAchievement(`🎯 Challenge Complete! +${points} points!`);
            updateStats();
            saveProgress();
            
            // Remove challenge for the day
            event.target.closest('.eco-tips').remove();
        }

        // Environmental impact calculator
        function showImpactCalculator() {
            const calculatorHtml = `
                <h3>🌍 Environmental Impact Calculator</h3>
                <div style="display: grid; gap: 15px; margin-top: 20px;">
                    <div>
                        <label>Miles driven per week:</label>
                        <input type="number" id="miles" placeholder="0" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    <div>
                        <label>Meat meals per week:</label>
                        <input type="number" id="meat" placeholder="0" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    <div>
                        <label>Shower time (minutes per day):</label>
                        <input type="number" id="shower" placeholder="0" style="width: 100%; padding: 10px; border-radius: 5px; border: 1px solid #ddd;">
                    </div>
                    <button class="btn" onclick="calculateImpact()">Calculate Impact</button>
                    <div id="impactResult" style="margin-top: 15px;"></div>
                </div>
            `;
            
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.5); display: flex; align-items: center; 
                justify-content: center; z-index: 1000;
            `;
            
            const content = document.createElement('div');
            content.style.cssText = `
                background: white; padding: 30px; border-radius: 20px; 
                max-width: 500px; width: 90%; max-height: 80%; overflow-y: auto;
            `;
            content.innerHTML = calculatorHtml + '<button class="btn" onclick="this.closest(\'.modal\').remove()" style="margin-top: 20px;">Close</button>';
            
            modal.className = 'modal';
            modal.appendChild(content);
            document.body.appendChild(modal);
        }

        function calculateImpact() {
            const miles = parseFloat(document.getElementById('miles').value) || 0;
            const meat = parseFloat(document.getElementById('meat').value) || 0;
            const shower = parseFloat(document.getElementById('shower').value) || 0;
            
            // Rough calculations (simplified)
            const carCO2 = miles * 0.89; // pounds CO2 per mile
            const meatCO2 = meat * 6.6; // pounds CO2 per serving
            const waterUsed = shower * 7 * 2.1; // gallons per week
            
            const totalCO2 = carCO2 + meatCO2;
            
            document.getElementById('impactResult').innerHTML = `
                <div style="background: #f8f9fa; padding: 15px; border-radius: 10px;">
                    <strong>Weekly Impact:</strong><br>
                    🚗 Driving: ${carCO2.toFixed(1)} lbs CO2<br>
                    🥩 Meat consumption: ${meatCO2.toFixed(1)} lbs CO2<br>
                    💧 Water usage: ${waterUsed.toFixed(1)} gallons<br>
                    <hr style="margin: 10px 0;">
                    <strong>Total CO2: ${totalCO2.toFixed(1)} lbs</strong>
                </div>
            `;
        }

        // Add floating menu options
        let menuOpen = false;
        
        function toggleFloatingMenu() {
            const menu = document.getElementById('floatingMenu');
            if (menuOpen) {
                menu.style.display = 'none';
                menuOpen = false;
            } else {
                menu.style.display = 'block';
                menuOpen = true;
            }
        }

        // Add floating menu HTML
        function addFloatingMenu() {
            const menuHtml = `
                <div id="floatingMenu" style="
                    position: fixed; bottom: 100px; right: 30px; 
                    background: white; border-radius: 15px; 
                    box-shadow: 0 8px 25px rgba(0,0,0,0.2); 
                    padding: 15px; display: none; z-index: 999;
                ">
                    <div onclick="showAchievements()" style="padding: 10px; cursor: pointer; border-radius: 8px;">
                        🏅 Achievements
                    </div>
                    <div onclick="showImpactCalculator()" style="padding: 10px; cursor: pointer; border-radius: 8px;">
                        🌍 Impact Calculator
                    </div>
                    <div onclick="showStudyPlan()" style="padding: 10px; cursor: pointer; border-radius: 8px;">
                        📅 Study Plan
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', menuHtml);
        }

        function showStudyPlan() {
            const planHtml = `
                <h3>📅 Personalized Study Plan</h3>
                <div style="margin-top: 20px;">
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <strong>Week 1: Climate Foundations</strong><br>
                        <small>Complete Climate Change & Renewable Energy modules</small>
                        <div style="margin-top: 5px;">
                            <div style="background: #e0e0e0; height: 8px; border-radius: 4px;">
                                <div style="background: linear-gradient(90deg, #43cea2, #185a9d); height: 8px; width: 60%; border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <strong>Week 2: Ecosystem Health</strong><br>
                        <small>Study Biodiversity & Water Conservation</small>
                        <div style="margin-top: 5px;">
                            <div style="background: #e0e0e0; height: 8px; border-radius: 4px;">
                                <div style="background: linear-gradient(90deg, #43cea2, #185a9d); height: 8px; width: 20%; border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                    <div style="background: #f8f9fa; padding: 15px; border-radius: 10px; margin: 10px 0;">
                        <strong>Week 3: Practical Action</strong><br>
                        <small>Focus on Sustainable Living & Waste Management</small>
                        <div style="margin-top: 5px;">
                            <div style="background: #e0e0e0; height: 8px; border-radius: 4px;">
                                <div style="background: linear-gradient(90deg, #43cea2, #185a9d); height: 8px; width: 0%; border-radius: 4px;"></div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
                background: rgba(0,0,0,0.5); display: flex; align-items: center; 
                justify-content: center; z-index: 1000;
            `;
            
            const content = document.createElement('div');
            content.style.cssText = `
                background: white; padding: 30px; border-radius: 20px; 
                max-width: 500px; width: 90%; max-height: 80%; overflow-y: auto;
            `;
            content.innerHTML = planHtml + '<button class="btn" onclick="this.closest(\'.modal\').remove()" style="margin-top: 20px;">Close</button>';
            
            modal.className = 'modal';
            modal.appendChild(content);
            document.body.appendChild(modal);
        }

        // Initialize everything when page loads
        document.addEventListener('DOMContentLoaded', function() {
            initializeApp();
            addDailyChallenge();
            addFloatingMenu();
            
            // Update floating icon to toggle menu
            document.querySelector('.floating-icon').onclick = toggleFloatingMenu;
        });
    