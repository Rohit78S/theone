
     * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    color: #333;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 30px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2d8f5f;
    font-size: 2.5em;
    margin-bottom: 10px;
}

.subtitle {
    color: #666;
    font-size: 1.2em;
}

.user-stats {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
    flex-wrap: wrap;
}

.stat-item {
    background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
    color: white;
    padding: 15px 25px;
    border-radius: 15px;
    text-align: center;
    min-width: 120px;
    transform: translateY(0);
    transition: all 0.3s ease;
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.stat-value {
    font-size: 1.8em;
    font-weight: bold;
    display: block;
}

.stat-label {
    font-size: 0.9em;
    opacity: 0.9;
}

.modules-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    margin-bottom: 30px;
}

.module-card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 25px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    cursor: pointer;
    border: 2px solid transparent;
}

.module-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    border-color: #43cea2;
}

.module-card.active {
    border-color: #43cea2;
    background: rgba(67, 206, 162, 0.1);
}

.module-title {
    color: #2d8f5f;
    font-size: 1.4em;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.module-description {
    color: #666;
    margin-bottom: 15px;
    line-height: 1.6;
}

.progress-bar {
    background: #e0e0e0;
    border-radius: 10px;
    height: 8px;
    margin-bottom: 10px;
    overflow: hidden;
}

.progress-fill {
    background: linear-gradient(90deg, #43cea2, #185a9d);
    height: 100%;
    border-radius: 10px;
    transition: width 0.5s ease;
}

.module-stats {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    color: #888;
}

.quiz-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 30px;
    margin-top: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    display: none;
}

.quiz-container.active {
    display: block;
    animation: slideIn 0.5s ease;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.question {
    margin-bottom: 25px;
}

.question h3 {
    color: #2d8f5f;
    margin-bottom: 15px;
    font-size: 1.2em;
}

.options {
    display: grid;
    gap: 10px;
}

.option {
    background: #f8f9fa;
    padding: 15px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.option:hover {
    background: #e9ecef;
    transform: translateX(5px);
}

.option.selected {
    background: #43cea2;
    color: white;
    border-color: #2d8f5f;
}

.option.correct {
    background: #28a745;
    color: white;
}

.option.incorrect {
    background: #dc3545;
    color: white;
}

.btn {
    background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
    color: white;
    border: none;
    padding: 15px 30px;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1.1em;
    font-weight: bold;
    transition: all 0.3s ease;
    margin: 10px 5px;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.achievement {
    background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
    color: #2d3436;
    padding: 15px;
    border-radius: 15px;
    margin: 10px 0;
    text-align: center;
    font-weight: bold;
    animation: bounce 0.6s ease;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

.leaderboard {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 25px;
    margin-top: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.leaderboard h3 {
    color: #2d8f5f;
    margin-bottom: 20px;
    text-align: center;
}

.leaderboard-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 10px;
    background: #f8f9fa;
    transition: all 0.3s ease;
}

.leaderboard-item:hover {
    transform: translateX(5px);
    background: #e9ecef;
}

.rank {
    font-weight: bold;
    font-size: 1.2em;
    color: #43cea2;
}

.eco-tips {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 25px;
    margin-top: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.eco-tip {
    background: linear-gradient(135deg, #a8e6cf 0%, #dcedc8 100%);
    padding: 20px;
    border-radius: 15px;
    margin: 15px 0;
    border-left: 5px solid #43cea2;
}

.floating-icon {
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #43cea2 0%, #185a9d 100%);
    color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.floating-icon:hover {
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .modules-grid {
        grid-template-columns: 1fr;
    }
    
    .user-stats {
        flex-direction: column;
        align-items: center;
    }
    
    h1 {
        font-size: 2em;
    }
}