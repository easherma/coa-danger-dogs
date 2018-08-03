<template>
  <div>
    <script type="application/javascript">
      function resize(id, source) {
      var iframe = document.getElementById(id);
      window.addEventListener('message', function(e) {
      if(e.origin !== source) return;
      if(isNaN(e.data.height)) return;
      iframe.height = (e.data.height + 72) + "px";
      }, false);
      }
    </script>
    <iframe
      id="embed-h8x4-nvyi"
      src="https://dev.socrata.com/foundry/data.austintexas.gov/h8x4-nvyi/embed"
      style="border-width:0"
      width="1020px"
      height="1000px"
      frameborder="0"
      scrolling="yes"
      onload="resize('embed-h8x4-nvyi', 'https://dev.socrata.com');"/>
  </div>
</template>
