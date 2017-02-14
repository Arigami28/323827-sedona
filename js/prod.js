      var form = document.querySelector(".search-hotels_form-search");
      var btn = document.querySelector(".search-hotels_btn");
      btn.addEventListener("click", function(event) {
        event.preventDefault();
        form.classList.add("search-hotels_form-search-on");
      });

    document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')