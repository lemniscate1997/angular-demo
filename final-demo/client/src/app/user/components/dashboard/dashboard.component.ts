import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  locationsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  countries = [
    { id: 1, name: 'India' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Australia' }
  ];

  states = [
    { id: 1, country_id: 1, name: 'Andhra Pradesh' },
    { id: 2, country_id: 1, name: 'Madhya Pradesh' },
    { id: 3, country_id: 2, name: 'San Francisco' },
    { id: 4, country_id: 2, name: 'Los Angeles' },
    { id: 5, country_id: 3, name: 'New South Wales' },
    { id: 6, country_id: 3, name: 'Victoria' },
  ];

  cities = [
    { id: 1, state_id: 1, name: 'Guntur', image: 'https://media-cdn.tripadvisor.com/media/photo-s/09/d2/01/6f/img-20150802-114901-largejpg.jpg' },
    { id: 2, state_id: 1, name: 'Vijayawada', image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/14/eb/ba/vijayawada.jpg' },
    { id: 3, state_id: 2, name: 'Bhopal', image: 'http://www.mptourism.com/sites/default/files/styles/destination_details_1280x600/public/destinationsbanner/Bhopal.jpg' },
    { id: 4, state_id: 2, name: 'Indore', image: 'https://images.thrillophilia.com/image/upload/s--QVx8veHi--/c_fill,f_auto,fl_strip_profile,h_775,q_auto,w_1600/v1/images/photos/000/131/340/original/1534855711_shutterstock_772830646.jpg.jpg?1534855711' },
    { id: 5, state_id: 3, name: 'SOMA', image: 'https://www.sftravel.com/sites/sftraveldev.prod.acquia-sites.com/files/styles/sft_1170w/public/field/image/Yerba-Buena-Gardens-%281%29.jpg' },
    { id: 6, state_id: 3, name: 'Richmond', image: 'http://broer.no/bro/b/b97_1.jpg' },
    { id: 7, state_id: 4, name: 'Burbank', image: 'https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/VC_Burbank_Stock_RM_E5HJJY_1280x640.jpg' },
    { id: 8, state_id: 4, name: 'Hollywood', image: 'https://www.californiabeaches.com/wp-content/uploads/2016/06/image-e1491429632840-1000x612.jpg' },
    { id: 9, state_id: 5, name: 'Sunset', image: 'https://www.goodfreephotos.com/albums/australia/new-south-wales/sydney/beautiful-landscape-sunset-and-dusk-on-the-beach-at-sydney-new-south-wales-australia.jpg' },
    { id: 10, state_id: 5, name: 'Sydney', image: 'https://www.telegraph.co.uk/content/dam/Travel/2018/August/sydney.jpg?imwidth=1400' },
    { id: 11, state_id: 6, name: 'Benalla', image: 'https://regionalliving.vic.gov.au/__data/assets/image/0005/1366592/benalla-ceramic-mural_r-1333-gr.jpg' },
    { id: 12, state_id: 6, name: 'Melbourne', image: 'https://d3n8a8pro7vhmx.cloudfront.net/icf/pages/195/attachments/original/1482432025/melbourne-victoria-australia.jpg?1482432025' },
  ];

  selectedStates = [];
  selectedCities = [];

  selectedCountry: string;
  selectedState: string;
  selectedCity: string;
  selectedIndex = 0;
  err = false;

  ngOnInit() {
    this.selectedCountry = this.countries[0].name;
    this.setSelectedStates(this.countries[0]);
    this.locationsForm = this.formBuilder.group({
      country: this.countries[0].name,
      state: this.selectedStates[0].name,
      city: this.selectedCities[0].name
    });
    this.onFormGroupValueChange();
  }

  setSelectedCities(state) {
    this.selectedCities = this.cities.filter((city) => city.state_id === state.id);
    this.selectedCity = this.selectedCities[0].name;
  }

  setSelectedStates(country) {
    this.selectedStates = this.states.filter((state) => state.country_id === country.id);
    this.selectedState = this.selectedStates[0].name;
    this.setSelectedCities(this.selectedStates[0]);
  }

  onFormGroupValueChange() {
    this.locationsForm.get('country').valueChanges.subscribe(country => {
      this.selectedCountry = country.name;
      this.setSelectedStates(country);
    });
    this.locationsForm.get('state').valueChanges.subscribe(state => {
      this.selectedState = state.name;
      this.setSelectedCities(state);
    });
  }

  setIndex(index: number) {
    this.selectedIndex = index;
    this.selectedCity = this.selectedCities[this.selectedIndex].name;

  }

  prevImage(name: string) {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.selectedCities.length - 1;
    } else {
      this.selectedIndex = this.selectedIndex - 1;
    }
    this.selectedCity = this.selectedCities[this.selectedIndex].name;
  }

  nextImage() {
    if (this.selectedIndex === this.selectedCities.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = this.selectedIndex + 1;
    }
    this.selectedCity = this.selectedCities[this.selectedIndex].name;
  }

  ngOnDestroy() {

  }
}
