var myLog = new File("/data/logs/today.log");

// See if the file exists
if(myLog.exists()){
  write('The file exists');
}else{
  write('The file does not exist');
}