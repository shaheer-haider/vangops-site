<template>
  <div>
    <h5 class="title-medium !text-5xl text-center">Our Services</h5>
    <div class="my-10">
      <div class="glowy-container w-full">
        <div class="flex items-center justify-between px-20 py-10 gap-8">
          <img src="@/assets/images/services/consulting.png" />
          <div class="max-w-xl space-y-2">
            <h5 class="title-medium">Consulting</h5>
            <p class="para">
              Say goodbye to security threats with our risk assessment services. Our
              cybersecurity experts will find any weak points in your company's defenses
            </p>
            <button class="btn-primary mt-8">More Detail</button>
          </div>
        </div>
        <div class="flex items-center justify-center gap-x-1 pb-10">
          <div v-for="x in 6">
            <div
              :class="
                x == 1
                  ? 'border border-primary w-4 h-4 rounded-full flex items-center justify-center'
                  : ''
              "
            >
              <div
                class="rounded-full"
                :class="
                  x == 1
                    ? 'bg-primary w-3 h-3 border-4 border-transparent'
                    : 'bg-stroke w-2 h-2'
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
