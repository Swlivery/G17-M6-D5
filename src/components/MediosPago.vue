<template>
  <section class="medios-pago py-5" id="Ahora-aceptamos">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5 mb-4 mb-md-0">
          <h2 class="text-light fw-bold display-5">
            Ahora aceptamos
          </h2>
        </div>
        <div class="col-md-7">
          <div class="row text-light justify-content-center justify-content-md-start">
            <div class="col-4 col-md-2 mb-3 mb-md-0">
              <i class="fab fa-cc-mastercard fa-3x"></i>
            </div>
            <div class="col-4 col-md-2 mb-3 mb-md-0">
              <i class="fab fa-cc-visa fa-3x"></i>
            </div>
            <div class="col-4 col-md-2 mb-3 mb-md-0">
              <i class="fab fa-cc-amex fa-3x"></i>
            </div>
            <div class="col-4 col-md-2 mb-3 mb-md-0">
              <i class="fab fa-cc-diners-club fa-3x"></i>
            </div>
            <div class="col-4 col-md-2 mb-3 mb-md-0">
              <i class="fab fa-cc-paypal fa-3x"></i>
            </div>
            <div class="col-4 col-md-2 mb-3 mb-md-0">
              <i class="fab fa-cc-discover fa-3x"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MediosPago'
}
</script>

<style scoped>
.medios-pago {
  background-color: #007bff;
}

.fa-3x {
  transition: transform 0.3s ease;
}

.fa-3x:hover {
  transform: scale(1.1);
}
</style>
