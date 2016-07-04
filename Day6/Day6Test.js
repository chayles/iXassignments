function average(numbers_list) {
    var sum = 0;
    for (var i = 0; i < numbers_list.length; i++) {
        sum = sum + numbers_list[i];
    }
    var average = sum / numbers_list.length;
    return average;
}

function assignGrade(grade) {
    if (grade < 60) {
        return 'F';
    } else if(grade >=60 && grade < 70) {
        return 'D';
    }
    else if(grade >= 70 && grade < 80) {
        return 'C';
    }
    else if(grade >= 80 && grade < 90) {
        return 'B';
    }
    else if(grade > 90) {
        return 'A';
    }
}

function pluralize(num, noun) {
    if(num > 1) {
        return num + " " + noun + "s";
    } else {
        return num + " " + noun;
    }
}

function longestWord(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength = 0;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    return currLongestWord;
}

function palindrome(word) {
    var n = word.length;
    for (var i=0; i < n; i++) {
        if (word[i] !== word[n-i-1]) {
            return "no";
        } 
    }
    return "yes";
}

function letterCounter(phrase, letter) {
    var currCount=0;
    for(var i = 0; i < phrase.length; i++) {
        if(phrase[i] === letter)
            currCount++;
    }
    return currCount;
} 

function longestPalindrome(sentence) {
    var splitSentence = sentence.split(" ");
    var currLongestWord = " ";
    var currLongestLength = 0;
    for (var i = 0; i < splitSentence.length; i++) {
        var tempLength = splitSentence[i].length;
        if(tempLength > currLongestLength) {
            currLongestLength = tempLength;
            currLongestWord = splitSentence[i];
        }
    }
    var n = currLongestWord.length;
    for (var j=0; j < n; j++) {
        if (currLongestWord[j] !== currLongestWord[n-j-1]) {
            return currLongestWord + " is not a palindrome";
        } 
    }
    return currLongestWord + " is a palindrome";
}

function areAnagrams (sentence1, sentence2) {
    var split1 = sentence1.split("");
    var split2 = sentence2.split("");
    var firstarray = split1.sort().join('').trim();
    var secondarray = split2.sort().join('').trim();
    if (firstarray === secondarray){
        return "yes";
    } 
    return "no";
}

