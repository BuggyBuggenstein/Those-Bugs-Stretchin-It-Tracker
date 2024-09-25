let totalPointsUser1 = 0;
let totalPointsUser2 = 0;
let streakUser1 = 0;
let streakUser2 = 0;
let goalUser1 = 0;
let goalUser2 = 0;

function logPoints(user) {
    let morningPoints = user === 'User1' ? parseInt(document.getElementById('morningPointsUser1').value) || 0 : parseInt(document.getElementById('morningPointsUser2').value) || 0;
    let eveningPoints = user === 'User1' ? parseInt(document.getElementById('eveningPointsUser1').value) || 0 : parseInt(document.getElementById('eveningPointsUser2').value) || 0;

    let pointsEarned = morningPoints + eveningPoints;

    if (user === 'User1') {
        totalPointsUser1 += pointsEarned;
        document.getElementById('totalPointsUser1').innerText = totalPointsUser1;
        updateStreak('User1', pointsEarned);
        showMotivationalMessage();
    } else {
        totalPointsUser2 += pointsEarned;
        document.getElementById('totalPointsUser2').innerText = totalPointsUser2;
        updateStreak('User2', pointsEarned);
        showMotivationalMessage();
    }

    document.getElementById(user === 'User1' ? 'morningPointsUser1' : 'morningPointsUser2').value = '';
    document.getElementById(user === 'User1' ? 'eveningPointsUser1' : 'eveningPointsUser2').value = '';
    updateSummary();
}

function updateStreak(user, points) {
    if (points > 0) {
        if (user === 'User1') {
            streakUser1++;
            document.getElementById('streakDisplayUser1').innerText = streakUser1;
        } else {
            streakUser2++;
            document.getElementById('streakDisplayUser2').innerText = streakUser2;
        }
    }
}

function setGoal(user) {
    let goalValue = user === 'User1' ? parseInt(document.getElementById('goalInputUser1').value) || 0 : parseInt(document.getElementById('goalInputUser2').value) || 0;
    if (user === 'User1') {
        goalUser1 = goalValue;
        document.getElementById('goalUser1').innerText = goalUser1;
    } else {
        goalUser2 = goalValue;
        document.getElementById('goalUser2').innerText = goalUser2;
    }
}

function updateSummary() {
    let summaryList = document.getElementById('summaryList');
    summaryList.innerHTML = '';
    summaryList.innerHTML += `<li>Bug 1 Total Points: ${totalPointsUser1}</li>`;
    summaryList.innerHTML += `<li>Bug 2 Total Points: ${totalPointsUser2}</li>`;
}

function showMotivationalMessage() {
    const messages = ["I love you, Bug!", "You can do it, Bug!", "Don't be a Dobby, Bug!"];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
}
