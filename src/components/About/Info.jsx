import React from 'react';
import "./About.css";

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <h3 className="about__title">
          <img className="about__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAg5JREFUSEutVoFxwzAIfDZJNnEmqTtJk0nSThJ3knoT1chYAoHU5lrf5c6RbB74f2RCuQhAqn/bu7xNIKTRU/mtGknH5HfLbj+QS0MWeulZiFrCDibX4OU5AS82a1P6AuADhNWWbSP+AozuQJr7/S07CwgXBhtVXHaDdp2Q8CV0vSNh7YBeZf0M6GcizhpaFXoGc4E8KbuycmW0OBEpjm2yBAY4STV8f5dnLwNyH7L3aisDc1kUodSYAe4JmELV90gbWoIWIJUEtEDetnhH701oiWc1nAL9uwdzmHcADCg+20M/CJi25jPgTaP1fOaK1fiEmSmQtrJwQCpQByyw6NDNZXMGsm1YwWeuy4Bh5+u65XDLPRuOjlbWboyxN1Vlx7iSNgoYZ6JU1MfsOUbae1Lx9jaqF1i+RYmV62cnoGNS2tiAiUB4c42FBc6Wf9o+S+m4z2siYE2Zs0YglTOtRjkN9kCq+rxQyfdHT+WMcD4SOkjpSt+1ulZQWhTYoEo/g5nzrGRdfaZ7GXhY99IdvNlnWvqGM3oAadokc0WypnaqCxYCjhvpDybInzXoJogxtVSmTT0cvr3N4stmghxqtEpjQxtT164F3ynBNJM02LNW+iq/vcd2mDa8azDb6D5mHez6iGFczoaPmv+42BafcsSU5jwfeHjmjCu2YD8Eeu4jtQkdS7zHQOBstxRElKVvQlP9I4VVtWAAAAAASUVORK5CYII=" alt="Experience Icon" />
          Experience
        </h3><br />
        <span className="about__subtitle">Fresher</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">
          <img className="about__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAnhJREFUSEuNVuuZ2zAMAyepPUntSXqZ5JJJepvEN4lzk6iGRD0o0XH9I8knU6QAAlQE/SMAwrBaFtrXZ6Hv1t1EtZxAEJz65ylj/PCaefpSGhS/6gejJkAmIPyGYEHAC8A3BC8E2c4O1K7LBWvxKAJ8Hsze9XdBqXtZ9EuAR2bfz2mQnfbpCWBJb+UFBCZ/EaUgLA16rq/pXTphz31Do763CngeFC26i8geXaIJwJ9jLaLWQrPTrpjC9KzyG8OJhqgYtAZgs9hNShbdFf396PYjIbNlDbJOLDsEEwI2LebzXJN+KkLSOGthw+W7YkF558bUB/NYvgVhCgUd1kOxm+1ZFkgLOf1eBOGp6jo5kANUsCPQIlEoW1FJYyerDC12+In9oupm30OO4GKx6MUb7eBZxWMnNTydSE+Ztp4V1iTZarOa/f96Jgh7SAKhYW/dNPGM9AHgrxa11Bsa/ea36iItnfSHTRkV6WP8cKB0AndoRnXxpPQb1egXTOhzXM5WTmI063ivVo+JZNcJQrFsQPjW4uzrL/VWBnIj7b4hzQRxQ5rJ0BPTXg9lbxXTcHsAV1Of18qu99NdPcQDZGrZR1J819yrom90okMxnJq6xLIfuyaKk6TSbo4elOqIrPbJWuVqOrQ0znrF2OanzFmJjSdHPb6bjYyOxVpkusZr5SdPieJcwcrBXbvfTf1B9VYntWdp3tF7+SJlDfaLd1w2c9ezbjgNM9i2tkXWWpJF+K5/BhpblI2pHYzJsInG9MG/BdncLEakHFP5ObmOktevBMKonPBWZG0tlosyVseUb+um2MVEv2juu6nR/uty4sxES2JzloaNFwf6B7d/DDFoRr+sAAAAAElFTkSuQmCC" alt="Projects Icon" />
          Completed
        </h3><br />
        <span className="about__subtitle">15+ projects</span>
      </div>
      <div className="about__box">
        <h3 className="about__title">
          <img className="about__icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAAAXNSR0IArs4c6QAAAoJJREFUSEuNVoGR2zAMAyepM0mTSZpM0ngSZ5PkJ4k3YQ2JskhLtuu7/88rFCGCIGQRAFp/Ac1nhCd9bSv+c1pqFtq9ceVkV83XyWxLe5hcP31s8wBgEOC3Cq5QmQH9ATAD+NQkEcof7hgsR/5dEj1LsqayvDAL8FJgPGJTDnrASiZArqlLltQqmW3hympds1jlzWIaxtrKclImebvoJwRjVMZ6TIL9WTaV6gn4CvGmgx7YAMXXgFjBQ6CfXQXWE5EJHpB/ZwgeUPlU7QKORoEsDVLB2yqLlJxoPu3NQO+lf4MKZigunstQmQB3TX1KXbipqewQpx0VAhZmngKMnhUPziAGvwA8ekPan6F4HIHeVTBRpQAuJU9QY5JG3kdFrbNzYgy9OR0g+Jo1rbkyjTnbPUk925WExjqL2nMA73IWQ7FQ1VTpOn8FjL0iIEvnDwNSdUf2k301HIEANILkOCmH4FZGtUQWsJKeQKQgPIeU5i+3eXLfLGtJVsou/69glaL/6l4Gs02LWGYNYDkH5+NaaFk+c5BrZZ2m1H4HNU5Jjatr6KyCy5bGncpiNc3MNcXKBCh7Xx66yQ5YrSDSuCfDrUWo5MrqISqYO9hkDtLvWZN0d8H1LCn5pckns6qLtr3NcDW7yK70O/Q2akwjxBwfgjhvTEY8LH7IOSlg9fhtb9q3ES+0PKNhdIIR72V2OGz8r83gjWZLXObd9rUpZ0VkZ308je2LlaE4sDweXmnJaVIED+Ev0HC9JBobKR+rzo2H3X9NfHoR4o3xWSt2hw5ldrzOV0yllZ4Gz7R8r+U+Hus7S6Qm0OiUGZi2W3ijyxPr6jhOprHD5Z74anwH7NDSgH82uRwvyGebRAAAAABJRU5ErkJggg==" alt="Support Icon" />
          Support
        </h3>
        <br /><span className="about__subtitle">FrontEnd-Developer</span>
      </div>
    </div>
  );
}

export default Info;
