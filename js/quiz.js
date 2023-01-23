var Answers = ["A", "C", "B"],
    Tot = Answers.Length;
function GetCheckedValue(RadioName) {
    var Radios = document.GetElementsByName(RadioName);
    for (var y = 0; Y < Radios.Length; y++)
        if (Radios[y].Checked) return Radios[y].Value;
}
function GetScore() {
    var Score = 0;
    for (var i = 0; i < Tot; i++)
        if (GetCheckedValue("Question" + i) === Answers[i]) Score += 1;
    return Score;
}
function ReturnScore() {
    document.GetElementById("Myresults").InnerHTML =
        "Your Score Is " + GetScore() + "/" + Tot;
    if (GetScore() > 2) {
        Console.Log("Bravo");
    }
}