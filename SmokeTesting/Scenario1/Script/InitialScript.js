﻿function Main() {
  const commandLineParams = BuiltIn.ParamStr(BuiltIn.ParamCount() - 1).split(';');
  const delimiter = ':';
  
  const serverUrlParamName = 'appUrl';
  const serverUrlParamValue = GetCmdParamValue(commandLineParams, serverUrlParamName, delimiter);
  
  if (Project.Variables.VariableExists("Page") && serverUrlParamValue)
  {
    Project.Variables.Page = serverUrlParamValue;
  }
}


function GetCmdParamValue(cmdParams, paramName, delimiter) {
  let rawValue = cmdParams.some(element => element.includes(paramName));
  return rawValue.split(delimiter)[1];
}