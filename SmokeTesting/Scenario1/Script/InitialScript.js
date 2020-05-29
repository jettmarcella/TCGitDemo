﻿function Main() {
  const commandLineParams = BuiltIn.ParamStr(BuiltIn.ParamCount() - 1).split(';');
  
  const serverUrlParamName = 'appUrl';
  const serverUrlParamValue = GetCmdParamValue(commandLineParams, serverUrlParamName, ':');
  
  if (Project.Variables.VariableExists("Page") && serverUrlParamValue)
  {
    Project.Variables.Page = serverUrlParamValue;
  }
}


function GetCmdParamValue(cmdParams, paramName, delimiter) {
  let rawValue = cmdParamsArray.some(element => element.includes(paramName));
  return rawValue.split(delimiter)[1];
}