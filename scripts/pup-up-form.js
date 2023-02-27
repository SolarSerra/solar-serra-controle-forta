    function openPopup() {
        var width = 600;
        var height = 600;
        var left = (screen.width / 2) - (width / 2);
        var top = (screen.height / 2) - (height / 2);
        var popup = window.open('https://docs.google.com/forms/d/e/1FAIpQLSeLfy-ZpoLL9F3jIeBflrjhoyq15EBhBAL3nO6W6vBm5gtlJg/viewform', 'popup', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
        popup.focus();
    }

    document.querySelector('.popup').addEventListener('click', function(event) {
        event.preventDefault();
        openPopup();
    });