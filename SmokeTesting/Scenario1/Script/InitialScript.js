﻿function Main() {
  const commandLineParams = BuiltIn.ParamStr(BuiltIn.ParamCount() - 1).split(';');
  const delimiter = '=';
  
  if (!Array.isArray(commandLineParams) || !commandLineParams)
  {
    return;
  }
  
  const serverUrlParamName = 'appUrl';
  const serverUrlParamValue = GetCmdParamValue(commandLineParams, serverUrlParamName, delimiter);
  
  if (Project.Variables.VariableExists("Page") && serverUrlParamValue)
  {
    Project.Variables.Page = serverUrlParamValue;
  }
}


function GetCmdParamValue(cmdParams, paramName, delimiter) {
  let rawValue = cmdParams.find(element => element.includes(paramName)).split(delimiter);
  return rawValue[1];
}