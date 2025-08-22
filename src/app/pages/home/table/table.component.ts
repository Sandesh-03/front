import { Component } from '@angular/core';
import { CustomSpinnerComponent } from '../../../common/utility/custom-spinner/custom-spinner.component';
import { PricingTableItem } from './pricing-table.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CustomSpinnerComponent],
  templateUrl: './table.component.html',
  // styleUrls: ['./table.component.css'] 
})
export class TableComponent {
  pricingTableItems: PricingTableItem[] = [
    {
      icon: 'icofont-ui-cut',
      title: 'Plastic Surgery',
      price: '₹1,20,000',
      features: [
        'Consultation with board-certified plastic surgeon',
        'Customized surgical plan tailored to your needs',
        'Pre-surgery health evaluation',
        'Post-surgery monitoring and follow-up visits',
        'Quick recovery with advanced techniques'
      ],
      link: '#book-plastic-surgery'
    },
    {
      icon: 'icofont-tooth',
      title: 'Teeth Whitening',
      price: '₹12,000',
      features: [
        'Safe & professional whitening by dental specialists',
        'Customizable shade improvement',
        'In-clinic whitening session',
        'Take-home whitening kit for lasting results',
        'Free initial consultation with dentist'
      ],
      link: '#book-teeth-whitening'
    },
    {
      icon: 'icofont-heart-beat',
      title: 'Heart Surgery',
      price: '₹7,50,000',
      features: [
        'Comprehensive cardiac diagnosis & evaluation',
        'Advanced minimally invasive heart surgery',
        'Experienced cardiac surgeons',
        'World-class ICU and surgical facilities',
        '24/7 monitoring & dedicated cardiac care team'
      ],
      link: '#book-heart-surgery'
    }
  ];
}
