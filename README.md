# Password-genarator
First listed my arrays numbers, uppercase, lowercase, special.
then made a function so it reads all questions but if user hits cancel then sends back to generate password button if they select cancel for the confirm ones then those will affect the passwordOptions
made variables for all prompts and made them (ask) so its not the same as my array variables
then made strings for all of the characters
made a if statement where if user types number less then 8 or higher then 128 system asks them to try again 
once user types the right number in they will then see confirm boxes asking about the other characters
once they finish that the program will take all the confirms and cancel and us it in if for function that means
 if (passwordOptions//(is yes)//(then it will see what askNumbers was and put it into the equation at the bottom as i and possibleCombo will push it there)
        .askNumbers {
      for (var i of numbers)
        possibleCombo.push(i);
    }
then the equation will take what was selected and generate that with password length to find your password
and return final password makes returns you back to the to waiting for the generate password button to be hit again.