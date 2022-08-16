let year = prompt("Enter the year for which you want to know the English football champion:", "");
if (year < 2011) {
  alert("Statistics were not kept yet")
} else if (year > 2022) {
  alert("The best is yet to come!")
} else if (year == 2012 || year == 2014 || year == 2018 || year == 2019 || year == 2021) {
  alert("Winner: Manchester City FC")
} else if (year == 2015 || year == 2017) {
  alert("Winner: Chelsea FC")
} else if (year == 2011 || year == 2013) {
  alert("Winner: Manchester United FC")
} else if (year == 2020) {
  alert("Winner: Liverpool FC")
} else if (year == 2016) {
  alert("Winner: Leicester City FC")
} else if (year == 2022) {
  alert("Season is still in progress")
} else {
  alert("Invalid year entered")
}

for (let i = 7; i < 15; i++) {
  if (i % 2 !== 0) {
    alert(i)
  }
  if (i === 12) {
    alert(i + ". Loop broken")
    break
  }
}

let j = 0;
while (j < 5) {
  alert(`number ${j}!`);
  j++;
}

// In the JS file complete:
//   1) Output English football champions by year (2011-2021). Use prompt to get the year. Add conditions:
//   1.1 If year < 2011 - show "Statistics were not kept yet"
// 1.2 If year 2022 - "Season is still in progress"
// 1.3 If year > 2022 - "The best is yet to come!"
// 1.4 If year is valid - use the teams.
// 1.4.1 For 2015, 2017 - "Winner: Chelsea FC"
// for 2012, 2014, 2018, 2019, 2021 - "Winner: Manchester City FC"
// for 2011, 2013 - "Winner: Manchester United FC"
// for 2020 - "Winner: Liverpool FC"
// for 2016 - "Winner: Leicester City FC"
// You can use if..else or the "?" operator with || (&&)
// 2) Using a for loop, output odd numbers from 7 to 15. When you reach 12, break and show "12. Loop broken"
// 3) Rewrite using while
