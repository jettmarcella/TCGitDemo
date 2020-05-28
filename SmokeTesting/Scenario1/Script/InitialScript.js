function Main() {
  if (Project.Variables.VariableExists("Page"))
  {
    Project.Variables.Page = BuiltIn.ParamStr(BuiltIn.ParamCount() - 1);
  }
}