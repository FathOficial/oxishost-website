$.getJSON('https://panel.oxis.host/api', response => typeText(response.servers)).catch(o_O => typeText());

function typeText(servers = null) {
    const strings = ["Oxis Host"];
    strings.push(...[
        "Free hosting.",
        "Online 24 hours a day.",
        "Simple and easy to use dashboard."
    ]);

    new TypeIt("#typingtext", {
        breakLines: false,
        strings,
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
};