
    $(function () {
        $(document).ready(function() {
            jQuery('.tel-input').inputmask({ 
                mask: "+7 (999) 999-99-99",
                autoUnmask: true,
                removeMaskOnSubmit: true
            });
        });
    });
    