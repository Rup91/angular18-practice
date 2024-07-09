import { Component, computed, signal } from '@angular/core';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  // ============  Primitive type signal ======================= //
    counter = signal(0);

   // multiplyCounter = computed(() => this.counter() * 10)

   // multiplier: number = 0;

   multiplyCounter = computed(() => {
      if(this.counter() <= 0) {
        return 0
      } else {
        return (this.counter() * 10)
      }
   });

  // multiplyCounter = computed(() => {
  //     if (this.multiplier < 10) {
  //         return 0
  //     }
  //     else {
  //         return this.counter() * this.multiplier;
  //     }
  //   })

    /**
     * We can change the value of signal using set method. But it is not good practice
     * There is another method called update. We can use update() here to change the value
     * of Signal.
     * 
     * ---- We have to assign some initial value of signal ----------
     */
    increment() {

      // this.counter.set(this.counter() + 1)
      this.counter.update(counter => counter + 1)
      // console.log(this.counter())
    }

    decrement() {
      this.counter() <= 0 ? this.counter.set(0) : this.counter.update(counter => counter - 1)
    }


    // ============ Non primitive types : Object or Array =================== //

    countryObj = signal({
      name: 'India',
      capital: 'New Delhi',
      freedom: 1950
    });

    changeFreedom() {
      this.countryObj.update(obj => 
        ({
        ...obj,
        freedom: 1947
      }));
    }


    countryLists = signal(['India', 'USA', 'UK', 'Netherlands']);
    

    deleteCountry() {
      const newCountry = [...this.countryLists()].splice(0, (this.countryLists().length - 1))
      
      this.countryLists.update(country => [...newCountry])
      console.log(this.countryLists())
    }


}
