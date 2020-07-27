const commandsForAll = [
  {
    command: "tw!help",
    commandSyntax: "tw!help",
    description: "Pokazuje wszystkie dostępne komendy.",
    example: "tw!help",
  },
  {
    command: "tw!tribe topatt",
    commandSyntax:
      "tw!tribe topatt [serwer] [strona] [id_plemienia1] [id_plemienia2] ... [id_plemienia n]",
    description:
      "Generuje listę graczy z wybranych plemion i sortuje po pokonanych w ataku.",
    example: "tw!tribe topatt pl143 1 975 170",
  },
  {
    command: "tw!tribe topdef",
    commandSyntax:
      "tw!tribe topdef [serwer] [strona] [id_plemienia1] [id_plemienia2] ... [id_plemienia n]",
    description:
      "Generuje listę graczy z wybranych plemion i sortuje po pokonanych w obronie.",
    example: "tw!tribe topdef pl143 1 975 170",
  },
  {
    command: "tw!tribe topsupp",
    commandSyntax:
      "tw!tribe topsupp [serwer] [strona] [id_plemienia1] [id_plemienia2] ... [id_plemienia n]",
    description:
      "Generuje listę graczy z wybranych plemion i sortuje po pokonanych jako wspierający.",
    example: "tw!tribe topsupp pl143 1 975 170",
  },
  {
    command: "tw!tribe toptotal",
    commandSyntax:
      "tw!tribe toptotal [serwer] [strona] [id_plemienia1] [id_plemienia2] ... [id_plemienia n]",
    description:
      "Generuje listę graczy z wybranych plemion i sortuje po pokonanych ogólnie.",
    example: "tw!tribe toptotal pl143 1 975 170",
  },
  {
    command: "tw!tribe toppoints",
    commandSyntax:
      "tw!tribe toppoints [serwer] [strona] [id_plemienia1] [id_plemienia2] ... [id_plemienia n]",
    description:
      "Generuje listę graczy z wybranych plemion i sortuje po punktach.",
    example: "tw!tribe toppoints pl143 1 975 170",
  },
];

const adminCommands = [
  {
    command: "tw!addgroup",
    commandSyntax: "tw!addgroup",
    description: "Dodaje nową grupę.",
    example: "tw!addgroup",
  },
  {
    command: "tw!groups",
    commandSyntax: "tw!addgroup",
    description:
      "Pokazuje listę grup dodanych przez administrację tego serwera Discord.",
    example: "tw!addgroup",
  },
  {
    command: "tw!deletegroup",
    commandSyntax: "tw!deletegroup [ID grupy z tw!groups]",
    description: "Usuwa grupę.",
    example: "tw!deletegroup 1",
  },
  {
    command: "tw!observe",
    commandSyntax: "tw!observe [ID grupy z tw!groups] [serwer] [id plemienia]",
    description: "Dodaje plemię do grupy.",
    example: "tw!observe 1 pl143 975 170",
  },
  {
    command: "tw!observations",
    commandSyntax: "tw!observations [ID grupy z tw!groups]",
    description: "Pokazuje plemiona należące do wybranej grupy.",
    example: "tw!observations 1",
  },
  {
    command: "tw!deleteobservation",
    commandSyntax:
      "tw!deleteobservation [ID grupy z tw!groups] [id z tw!observations]",
    description: "Usuwa plemię z grupy.",
    example: "tw!deleteobservation 1 pl143 975 170",
  },
  {
    command: "tw!conqueredvillages",
    commandSyntax: "tw!conqueredvillages [ID grupy z tw!groups]",
    description:
      "Zmienia kanał na którym będą się pojawiać informację o podbitych wioskach w danej grupie. WAŻNE! Wywołaj tę komendę na kanale na którym chcesz dostawać te powiadomienia.",
    example: "tw!conqueredvillages 1",
  },
  {
    command: "tw!lostvillages",
    commandSyntax: "tw!lostvillages [ID grupy z tw!groups]",
    description:
      "Zmienia kanał na którym będą się pojawiać informację o straconych wioskach w danej grupie. WAŻNE! Wywołaj tę komendę na kanale na którym chcesz dostawać te powiadomienia.",
    example: "tw!lostvillages 2",
  },
  {
    command: "tw!disableconqueredvillages",
    commandSyntax: "tw!disableconqueredvillages [ID grupy z tw!groups]",
    description: "Wyłącza powiadomienia o podbitych wioskach w danej grupie.",
    example: "tw!disableconqueredvillages 1",
  },
  {
    command: "tw!disablelostvillages",
    commandSyntax: "tw!disablelostvillages [ID grupy z tw!groups]",
    description: "Wyłącza powiadomienia o straconych wioskach w danej grupie.",
    example: "tw!disablelostvillages 1",
  },
  {
    command: " tw!showennobledbarbs",
    commandSyntax: " tw!showennobledbarbs [ID grupy z tw!groups]",
    description:
      "Włącza/wyłącza informacje o podbitych wioskach barbarzyńskich.",
    example: "tw!showennobledbarbs 1",
  },
  {
    command: " tw!changelanguage",
    commandSyntax: " tw!changelanguage [en | pl]",
    description: "Zmienia język w którym są wyświetlane odpowiedzi od bota.",
    example: "tw!changelanguage pl",
  },
  {
    command: " tw!showinternals",
    commandSyntax: " tw!showinternals [ID grupy z tw!groups]",
    description:
      "Włącza/wyłącza notyfikacje o podbiciach plemion należących do jednej grupy.",
    example: "tw!showinternals 1",
  },
];

export default {
  commandsForAll,
  adminCommands,
};
