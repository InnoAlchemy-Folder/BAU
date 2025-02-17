import React, { useState } from 'react';

function TermsAndConditions({ onAccept }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="terms">
      {/* <h2>Terms and Conditions</h2> */}
      <p>1. Ticket Validity: This ticket is valid only for the date and time specified. It is non-transferable and non-refundable.</p>
      <p>2. Admission:</p>
      <ul>
        <li>a. Admission to the dinner is granted only upon presentation of a valid ticket. Each ticket admits one person only.</li>
        <li>b. Doors open at 6 PM.</li>
        <li>c. Guests are advised to arrive on time. Late arrivals may result in limited seating options or denied entry.</li>
      </ul>
      <p>3. Dress Code: The dress code for the event is formal. Guests not adhering to the dress code may be refused entry.</p>
      <p>4. Conduct:</p>
      <ul>
        <li>a. All attendees are expected to maintain decorum throughout the event. The BAUAA reserves the right to refuse admission or remove any guest whose behavior is deemed inappropriate.</li>
        <li>b. The consumption of alcohol is restricted.</li>
      </ul>
      <p>5. Health & Safety: Any person who feels unwell or displays symptoms of illness is encouraged to refrain from attending the event.</p>
      <p>6. Liability: The BAUAA shall not be held responsible for any loss, damage, or injury incurred during the event, whether personal or property-related.</p>
      <p>7. Event Changes: The BAUAA reserves the right to make changes to the event schedule, or venue, as necessary. In such cases, ticket holders will be notified in advance.</p>
      <p>8. Photography & Media:</p>
      <ul>
        <li>a. By attending this event, you consent to being photographed or recorded. These images and recordings may be used by BAUAA for promotional or archival purposes.</li>
        <li>b. Guests are allowed to take photos or videos for personal use but must respect the privacy of other attendees.</li>
      </ul>
      <div>
        <input type="checkbox" checked={isChecked} onChange={handleCheck} />
        <label>I accept the terms and conditions</label>
      </div>
      <button onClick={onAccept} disabled={!isChecked}>Accept and Proceed</button>
    </div>
  );
}

export default TermsAndConditions;
