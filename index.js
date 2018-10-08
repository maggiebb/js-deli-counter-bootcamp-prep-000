function takeANumber(line,person){
  line.push(person);
  return `Welcome, ${person}. You are number ${line.length} in line.`;
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length>0){
    var name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  }
  else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line){
  if(line.length>0) {
    while(line.length>0){
    var name = katzDeliLine.shift();
    return 'The line is currently ${line[]} . + ${line}` ;
  }
  else{
    return "The line is currently empty."
  }
  }
}