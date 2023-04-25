function DNAStrand(dna){
  var newStrand = ""
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == "A") {
      newStrand += "T"
    }
    else if (dna[i] == 'T') {
      newStrand += "A"
    }
    else if (dna[i] == "G") {
      newStrand += "C"
    }
    else if (dna[i] == "C") {
      newStrand += "G"
    }
  }
  return newStrand
}

// Solution to understand:
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}
