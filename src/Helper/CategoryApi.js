export default function categoryApi(category) {
    switch (category) {
      case "General Knowledge":
        return "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";
  
      case "Mathematics":
        return "https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple";
  
      case "Sports":
        return "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
  
      case "Geography":
        return "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple";
  
      case "History":
        return "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";
  
      case "Vehicles":
        return "https://opentdb.com/api.php?amount=10&category=28&difficulty=easy&type=multiple";
  
      case "Comics":
        return "https://opentdb.com/api.php?amount=10&category=29&difficulty=easy&type=multiple";
  
      default:
        return "https://opentdb.com/api.php?amount=10&category=31&difficulty=easy&type=multiple";
    }
  }