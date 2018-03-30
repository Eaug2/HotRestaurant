// Basic route that sends the user first to the AJAX Page
app.get("/viewtables", function (req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
});

app.get("/makereservation", function (req, res) {
    res.sendFile(path.join(__dirname, "makeReservation.html"));
});