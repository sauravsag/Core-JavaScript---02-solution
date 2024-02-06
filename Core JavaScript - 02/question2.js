let ages = [19,22,19,24,20,25,26,24,24,25];
ages.sort((a, b) => a - b);
let minAge = ages[0];
let maxAge = ages[ages.length - 1];
let medianAge;

if (ages.length % 2 === 0) {
    const mid1 = ages[Math.floor(ages.length / 2) - 1];
    const mid2 = ages[Math.floor(ages.length / 2)];
    medianAge = (mid1 + mid2) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

const sumAges = ages.reduce((sum, age) => sum + age, 0);
const averageAge = sumAges / ages.length;

const ageRange = maxAge - minAge;

const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

console.log('Max Age:', maxAge);
console.log('Min Age:', minAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', averageAge);
console.log('Age Range:', ageRange);
console.log('Min-Average Difference:', minDifference);
console.log('Max-Average Difference:', maxDifference);

