import React from 'react'
import MultipleQuestion from "./MultipleQuestion";
import NormalQuestion from "./NormalQuestion";

const questions = [
    {
        "id": 1,
        "question": "1. What are feral cats?",
        "isMultipleChoiceQuestion": true,
        "explanation": "When domestic cats are abandoned without being spayed or neutered, they breed uncontrollably. These unspayed and unneutered cats have kittens who are not socialized with humans. True feral cats are the wild children of abandoned domestic cats. They are wild in the truest sense.",
        "itemId": 1,
        "answers": [
            {
                "id": 1,
                "answer": "Females who are not spayed, live indoors but go out at night.",
                "isCorrect": false
            },
            {
                "id": 2,
                "answer": "Tom cats who are not neutered, live indoors but go out at night.",
                "isCorrect": false
            },
            {
                "id": 3,
                "answer": "Domestic cats who live indoors and go out at night.",
                "isCorrect": false
            },
            {
                "id": 4,
                "answer": "The wild kittens of domestic cats who have never lived with humans.",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 2,
        "question": "2. Stable feral cat colonies live in what kind of society?",
        "isMultipleChoiceQuestion": false,
        "explanation": "Stable feral cat colonies live in a matriarchal society. This means that the mother cats and their daughters stay in the same area, helping to feed and take care of each other\u0027s kittens, kind of like a lion pride. The males born in the colony are eventually evicted from the society by the toms who protect the colony. The evicted males wander off in search of their own colony.",
        "itemId": 1,
        "answers": [
            {
                "id": 33,
                "answer": "Matriarchal",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 3,
        "question": "3. Feral cats are friendly and completely trust humans.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Feral cats, the offspring of domestic cats, are elusive and do not trust humans. This is the result of never being handled by or socialized with humans. If cornered, a feral cat will attack.",
        "itemId": 1,
        "answers": [
            {
                "id": 5,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 6,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 4,
        "question": "4. Where can feral cat colonies be found?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Feral cat colonies can be found in alleyways, behind shopping centers, in parks, in abandoned houses, virtually any where humans do not always go. The colonies can average as low as two full grown cats upward to about fifty or sixty, maybe more.",
        "itemId": 1,
        "answers": [
            {
                "id": 7,
                "answer": "Behind shopping centers",
                "isCorrect": false
            },
            {
                "id": 8,
                "answer": "All of these",
                "isCorrect": true
            },
            {
                "id": 9,
                "answer": "In parks",
                "isCorrect": false
            },
            {
                "id": 10,
                "answer": "In alleyways",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 5,
        "question": "5. What is considered the most humane and effective way of reducing colonies?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Trapping, neutering, and returning feral cats to their colony habitat is considered the most humane and effective way of reducing colonies. In this context, neutering also means spaying.\nTrap and kill does not reduce the size of a colony. When intact cats are trapped and killed, a void is left in the colony, which will then be filled by more intact cats, who will mate and grow the colony out of control.\nTrap, tame, and adopt does not reduce the colonies. As a general rule true feral cats, the offspring of domestic cats who were never socialized with humans, cannot be adopted by humans, as these cats are too wild. However, as with all cases, there are exceptions.\nTrap, neuter, and relocate also does not reduce the colonies. Relocating a feral cat away from the only colony he or she has ever known is like signing a death warrant. The cats will become depressed and confused, and would be vulnerable to attack by the new colony he or she is released into.",
        "itemId": 1,
        "answers": [
            {
                "id": 11,
                "answer": "Trap, neuter, relocate",
                "isCorrect": false
            },
            {
                "id": 12,
                "answer": "Trap and kill",
                "isCorrect": false
            },
            {
                "id": 13,
                "answer": "Trap, neuter, return",
                "isCorrect": true
            },
            {
                "id": 14,
                "answer": "Trap, tame, and adopt",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 6,
        "question": "6. What is the best way to feed a colony should you want to?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The best way to feed a colony is with a scheduled feeding. By feeding them at the same time every day, the cats will become used to you and you will then be able to observe if any females are pregnant or nursing. Also, by feeding them at the same time, you will then be able to tell if they are all eating.\nFeeding the colony anytime they want to be fed is a bad idea, because the cats will always want to eat. Like little children who do not know when to stop eating, the cats will eat and eat and make themselves sick.\nPlacing the food dishes wherever you want, whenever you want is also a bad idea. The cats will not know from one day to the next when and where they are going to be fed. Also, by feeding the cats this way, you will never know if all the cats are eating or if their food is being stolen by other cats or stray dogs.\nFeeding the cats only once a day, the time doesn\u0027t matter, is also a bad idea. Feral cats live outside in all kinds of weather, and extremely cold weather makes them more hungry than usual. Also, if the colony has pregnant females, those females need extra food for themselves and for their growing babies inside them.",
        "itemId": 1,
        "answers": [
            {
                "id": 15,
                "answer": "With scheduled feeding times.",
                "isCorrect": true
            },
            {
                "id": 16,
                "answer": "By placing the food dishes wherever you want, whenever you want.",
                "isCorrect": false
            },
            {
                "id": 17,
                "answer": "Anytime they want to be fed.",
                "isCorrect": false
            },
            {
                "id": 18,
                "answer": "Only once a day, the time doesn\u0027t matter.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 7,
        "question": "7. Feral cats do not need shelters, as they are used to being outside in all kinds of weather.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Feral cats do need shelter. If colony is being managed by a human caretaker, the caretaker should provide them with a man-made shelter, like a doghouse, to protect them from the wind, cold, rain, snow, and heat. Just because feral cats are the wild offspring of domestic cats doesn\u0027t mean they do not need shelter.",
        "itemId": 1,
        "answers": [
            {
                "id": 19,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 20,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 8,
        "question": "8. At what age do feral cat mothers bring their babies out in the open?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Like lionesses, feral cat mothers bring their babies out in the open at approximately 6 weeks of age. If the colony lives in an alleyway, the little ones are more than likely on the alley floor, while the rest of the colony is taking shelter in a nearby yard. If the colony is in a park or behind a building, the kittens will be somewhere safe nearby. If you see a female who is heavy with milk, but do not see kittens, the mother and the rest of the colony will give you an indication if the kittens are nearby.\nThe feral cat colony I was taking care of had a mother, three 9 month old kittens, and three kittens about 3 months old. They were in my alleyway, and the mother and her older children were fed on my cinderblock fence, while the little kittens were in the alley. I had no idea that the mother had little ones, until one day I saw the mother and her older children look intensely down to the alley floor and drop food from the plates. This made me realize that there were little kittens. I then opened my alley door and to my surprise I saw three little kittens. From that moment on, I began leaving food out for the little ones.",
        "itemId": 1,
        "answers": [
            {
                "id": 21,
                "answer": "10 weeks",
                "isCorrect": false
            },
            {
                "id": 22,
                "answer": "3 weeks",
                "isCorrect": false
            },
            {
                "id": 23,
                "answer": "14 weeks",
                "isCorrect": false
            },
            {
                "id": 24,
                "answer": "6 weeks",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 9,
        "question": "9. On average, how many litters can two uncontrolled breeding cats have in a year?",
        "isMultipleChoiceQuestion": true,
        "explanation": "On average, a pair of two uncontrolled breeding cats can have two litters per year. During the first year, the pair of cats can have approximately 12 kittens. If left uncontrolled, they can have 66 cats the second year, 2,201 cats in the third year, 3,822 cats in the fourth year, and 12,680 cats in the fifth year. By the tenth year, the two original uncontrolled breeding cats and their offspring can produce a staggering 80,399,780 cats. This is why it is so important to have your cat spayed or neutered.",
        "itemId": 1,
        "answers": [
            {
                "id": 25,
                "answer": "1",
                "isCorrect": false
            },
            {
                "id": 26,
                "answer": "4",
                "isCorrect": false
            },
            {
                "id": 27,
                "answer": "5-6",
                "isCorrect": false
            },
            {
                "id": 28,
                "answer": "2-3",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 10,
        "question": "10. What is the best way to catch a feral cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The best way to catch a feral cat is to trap it with a humane cat trap. These cat traps can be borrowed from any animal shelter, humane society, or local SPCA. The cat is lured into the trap with food, and the door closes shut on them.\n\nUnless the cat knows you and trusts you, do not pick the cat up and place it in a cat carrier. This is a wild cat and will attack you because it is feeling threatened.\n\nLuring it to a cardboard box that has food in it can work, but be please be aware that feral cats can claw through the box and escape.\n\nLuring it to an open area with food, then using a net to catch it could work, but the cat will fight and most likely tear the net and escape.",
        "itemId": 1,
        "answers": [
            {
                "id": 29,
                "answer": "Just picking it up and placing it in a cat carrier.",
                "isCorrect": false
            },
            {
                "id": 30,
                "answer": "Trapping it with a humane cat trap.",
                "isCorrect": true
            },
            {
                "id": 31,
                "answer": "Luring it to a cardboard box with food then grabbing it.",
                "isCorrect": false
            },
            {
                "id": 32,
                "answer": "Luring it to an open area with food, then using a net to catch it.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 11,
        "question": "1. The colors of cat fur are diverse and varied; however, there are usually considered to be about six basic coat colors. Which one of the following is not considered a fur color?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The six basic fur colors are white, black, red (also called orange or ginger), brown, cream (a combination of white and red), and blue (also called gray). There are different shades and intensities of these colors, but all fit into these basic color categories.",
        "itemId": 2,
        "answers": [
            {
                "id": 34,
                "answer": "blue",
                "isCorrect": false
            },
            {
                "id": 35,
                "answer": "beige",
                "isCorrect": true
            },
            {
                "id": 36,
                "answer": "red",
                "isCorrect": false
            },
            {
                "id": 37,
                "answer": "cream",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 12,
        "question": "2. Which one of the following is not a reason why cats shed their fur?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats shed all year round to get rid of dead hairs. If a cat has a dust or food allergy, it might shed excessively. Outside cats grow a winter coat to protect them from the cold, and shed this extra fur when the weather becomes warmer again.",
        "itemId": 2,
        "answers": [
            {
                "id": 38,
                "answer": "to get rid of dead hairs",
                "isCorrect": false
            },
            {
                "id": 39,
                "answer": "because of a season change",
                "isCorrect": false
            },
            {
                "id": 40,
                "answer": "because of an allergy",
                "isCorrect": false
            },
            {
                "id": 41,
                "answer": "because they are too sedentary",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 13,
        "question": "3. Most cats with orange fur are female.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Most cats with orange fur are male (about 75%). The reason for this is that the gene for fur color is carried on the X chromosome. Because males have only one X chromosome, if that one X chromosome carries the orange fur gene than the cat will have orange fur. However, because females have two X chromosomes, both X chromosomes must carry the orange fur gene for the cat to be orange. In a female, one orange fur gene and one gene of another fur color will result in a blending of the two colors, leading to a tortoiseshell or calico cat.",
        "itemId": 2,
        "answers": [
            {
                "id": 42,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 43,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 14,
        "question": "4. The length of a cat\u0027s fur varies from breed to breed. Which one of the following cat breeds has long fur?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The ragdoll is a large cat, with the normal adult weight being 15 - 20 pounds. Ragdolls were first bred in the 1960s.",
        "itemId": 2,
        "answers": [
            {
                "id": 44,
                "answer": "Snowshoe",
                "isCorrect": false
            },
            {
                "id": 45,
                "answer": "Bombay",
                "isCorrect": false
            },
            {
                "id": 46,
                "answer": "Ragdoll",
                "isCorrect": true
            },
            {
                "id": 47,
                "answer": "Korat",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 15,
        "question": "5. Fur loss can be caused by a variety of different conditions; however, which one of the following is the most common cause?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Ringworm is a fungus that can affect cats, transmitted by contact with other diseased animals or equipment that has been used on a diseased animal. Ringworm has several symptoms, including fur loss, scaly or crusty areas of skin, and itching. The infection may clear up by itself, but for longhaired cats special treatment might be required.",
        "itemId": 2,
        "answers": [
            {
                "id": 48,
                "answer": "lice",
                "isCorrect": false
            },
            {
                "id": 49,
                "answer": "ringworm",
                "isCorrect": true
            },
            {
                "id": 50,
                "answer": "Cushing\u0027s disease",
                "isCorrect": false
            },
            {
                "id": 51,
                "answer": "hypothyroidism",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 16,
        "question": "6. Whiskers, a specialized type of cat fur, are used to help the cat feel and sense the things around it. Whiskers are found on several places on the cat\u0027s body; however, which one of the following places do whiskers not grow?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Whiskers are two to three times thicker than the rest of the cat\u0027s fur, and are very sensitive.",
        "itemId": 2,
        "answers": [
            {
                "id": 52,
                "answer": "above their eyes",
                "isCorrect": false
            },
            {
                "id": 53,
                "answer": "on the back of their front legs",
                "isCorrect": false
            },
            {
                "id": 54,
                "answer": "on their chin",
                "isCorrect": false
            },
            {
                "id": 55,
                "answer": "on the back of their rear legs",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 17,
        "question": "7. Most people who describe themselves as allergic to cats are allergic to the cat\u0027s fur.",
        "isMultipleChoiceQuestion": true,
        "explanation": "The majority of people that are allergic to cats are not allergic to the cat\u0027s fur, but to the minuscule dried flakes of saliva that are left in the cat\u0027s fur after the cat cleans itself. These flakes, called dander, collect in the cat\u0027s fur and often lead people to assume that they are allergic to the cat\u0027s hair.",
        "itemId": 2,
        "answers": [
            {
                "id": 56,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 57,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 18,
        "question": "8. A problem that plagues many cats (and cat owners!) is hairballs, caused when a cat swallows too much fur when grooming itself. Which one of the following is *not* a way to prevent hairballs?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Although drinking plenty of water is good for your cat, it does not help prevent hairballs. Brushing your cat daily is a good practice because it gets rid of the loose fur so your cat doesn\u0027t swallow it; feeding your cat hairball prevention cat food can help as well, and the high fiber content in canned pumpkin helps to move any fur in your cat\u0027s stomach smoothly through its intestines.",
        "itemId": 2,
        "answers": [
            {
                "id": 58,
                "answer": "feeding your cat canned pumpkin",
                "isCorrect": false
            },
            {
                "id": 59,
                "answer": "frequently brushing your cat",
                "isCorrect": false
            },
            {
                "id": 60,
                "answer": "making sure your cat drinks plenty of water",
                "isCorrect": true
            },
            {
                "id": 61,
                "answer": "giving your cat hairball prevention cat food",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 19,
        "question": "9. Cat fur comes in a variety of different patterns. Which one of the following is the most common coat pattern in cats?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The tabby coat is the most common pattern. The other patterns are bicolor, tricolor, tortoiseshell, solid, and colorpoint. There are so many different colors and patterns of fur!",
        "itemId": 2,
        "answers": [
            {
                "id": 62,
                "answer": "solid",
                "isCorrect": false
            },
            {
                "id": 63,
                "answer": "bicolor",
                "isCorrect": false
            },
            {
                "id": 64,
                "answer": "tortoiseshell",
                "isCorrect": false
            },
            {
                "id": 65,
                "answer": "tabby",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 20,
        "question": "10. Blue-eyed cats with which fur of which color are known for being deaf?",
        "isMultipleChoiceQuestion": false,
        "explanation": "Although not all blue-eyed white cats are deaf, many (65 - 85 percent) are. This is because the blue coloration of the eyes in a white cat is a result of the lack of a certain stem cell; deafness is caused by the absence of this same stem cell. However, white colored fur and eye color can be determined by different genes, so not every blue-eyed white cat will be deaf.",
        "itemId": 2,
        "answers": [
            {
                "id": 66,
                "answer": "white",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 21,
        "question": "1. The Cat Fanciers\u0027 Association (CFA), founded in 1906 in the USA, describes a solid black cat as having a dense coal-black coat and a black nose. The paw pads may be...?",
        "isMultipleChoiceQuestion": true,
        "explanation": "In addition, there must be no \"rust\" at the tips of the hair. If the roots are white, the cat is a \"black smoke\". If there is a white spot on the chest an otherwise black cat, we say she has a \"locket\". Generally, beautiful black cats have a gene which suppresses the tabby (striped) pattern that they would otherwise have. You might see the stripes in the sun.",
        "itemId": 3,
        "answers": [
            {
                "id": 67,
                "answer": "either black or brown",
                "isCorrect": true
            },
            {
                "id": 68,
                "answer": "brown only",
                "isCorrect": false
            },
            {
                "id": 69,
                "answer": "black only",
                "isCorrect": false
            },
            {
                "id": 70,
                "answer": "neither black nor brown",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 22,
        "question": "2. The Cat Fanciers\u0027 Association (CFA), the premier cat registry of North America and the largest in the world, recognizes 22 breeds that may have a solid black coat. Which is NOT one of them?",
        "isMultipleChoiceQuestion": true,
        "explanation": "A Siamese should NEVER be solid black, but instead have points (darker colored areas, such as in the paws). If you see a solid black that has a Siamese look, it might be an ebony Oriental, but if someone tries to sell you a \"black Siamese\", he is less than ethical. Other breeds that come with black coats are the Maine coon, the American curl, and the Persian. Generally, beautiful black cats have a gene which suppresses the tabby (striped) pattern they would normally have. You might see it under certain lighting.",
        "itemId": 3,
        "answers": [
            {
                "id": 71,
                "answer": "Siamese",
                "isCorrect": true
            },
            {
                "id": 72,
                "answer": "American Bobtail",
                "isCorrect": false
            },
            {
                "id": 73,
                "answer": "Cornish Rex",
                "isCorrect": false
            },
            {
                "id": 74,
                "answer": "Manx",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 23,
        "question": "3. Which relatively new cat breed is the ONLY breed whose ONLY acceptable color is black?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The Bombay is actually a cross between a Burmese and an American Shorthair, developed in the 1950s in Louisville, Kentucky. Nikki Horner, who created the breed, was specifically looking for a cat to resemble the black panther in miniature. An American bobtail or a Manx may be black, but other colors are permitted by the Cat Fanciers\u0027 Association (CFA). \"Bangalore\" is not a cat breed.",
        "itemId": 3,
        "answers": [
            {
                "id": 75,
                "answer": "Bombay",
                "isCorrect": true
            },
            {
                "id": 76,
                "answer": "American Bobtail",
                "isCorrect": false
            },
            {
                "id": 77,
                "answer": "Manx",
                "isCorrect": false
            },
            {
                "id": 78,
                "answer": "Bangalore",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 24,
        "question": "4. Black cats may genetically have some protection from what feline disease?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Scientists call the phenomenon of blackness in cats \"melanism\". One of the genes that permit melanism is in the same superfamily as the human gene that, when mutated, provides some resistance to viral infections, including HIV, by altering the cell membrane. So some veterinary scientists have theorized that melanism may provide cats with similar protection from viruses, including FIV. So your beautiful black cat may be blessed as well!",
        "itemId": 3,
        "answers": [
            {
                "id": 79,
                "answer": "Hyperthyroidism",
                "isCorrect": false
            },
            {
                "id": 80,
                "answer": "Diabetes",
                "isCorrect": false
            },
            {
                "id": 81,
                "answer": "Feline immunodeficiency virus (FIV) infection",
                "isCorrect": true
            },
            {
                "id": 82,
                "answer": "Feline acne",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 25,
        "question": "5. Your beautiful black cat is getting a little older, and his/her coat is turning lighter. What nutrient might reverse this?",
        "isMultipleChoiceQuestion": true,
        "explanation": "A deficiency in tyrosine, an amino acid, is associated with a reduction in melanin, the dark pigment that gives a cat its color. Consequently, supplementing your cat\u0027s diet with tyrosine may reverse this process. By the way, unlike their human caretakers, cats can synthesize vitamin C, so one rarely needs to add it to their diet.",
        "itemId": 3,
        "answers": [
            {
                "id": 83,
                "answer": "Magnesium",
                "isCorrect": false
            },
            {
                "id": 84,
                "answer": "Vitamin C",
                "isCorrect": false
            },
            {
                "id": 85,
                "answer": "Tyrosine",
                "isCorrect": true
            },
            {
                "id": 86,
                "answer": "Niacin",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 26,
        "question": "6. Black is one of the dominant colors of cats, and the other is red. The \"dilute\" of black is blue, say the cat fanciers. But of course, the cat is not really blue like the sky, but...?",
        "isMultipleChoiceQuestion": true,
        "explanation": "A \"dilute\" means simply a lighter or less dense expression of red or black (think \"washed out\"). \"Blue\" is not sky-blue or royal blue but gray or maltese. Cat fanciers use \"red\" to denote what an ordinary person might call orange or ginger. The dilute of red is cream. Tortoiseshell describes a coat pattern that is randomly patched with black and red all over (or their dilutes). I never saw a purple cat (I never hope to see one...).",
        "itemId": 3,
        "answers": [
            {
                "id": 87,
                "answer": "orange",
                "isCorrect": false
            },
            {
                "id": 88,
                "answer": "gray or maltese",
                "isCorrect": true
            },
            {
                "id": 89,
                "answer": "purple",
                "isCorrect": false
            },
            {
                "id": 90,
                "answer": "tortoiseshell",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 27,
        "question": "7. If you own a beautiful black tomcat, both of his parents must have been solid black.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Without a pedigree, your beautiful black cat\u0027s origins remain as mysterious as the night! A black sire and a red dam may produce black kittens, or they may produce kittens with a tortoiseshell pattern (randomly patched all over with black and red). Black or blue (the dilute of black) bred to tortoiseshell may also produce some black kittens as well. And there are many more combinations of cat coats and colors (such as tabby) that could produce a black kitten than I could possibly include in this space! (But generally speaking, there was a beautiful black cat in the family tree somewhere.)",
        "itemId": 3,
        "answers": [
            {
                "id": 91,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 92,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 28,
        "question": "8. What color eyes would you LEAST expect to find on a beautiful black cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Melanin is the dark pigment which gives the eyes, hair, and skin its color. In cats, the melanin gives eyes a color range from yellow to gold to copper. The transparent portion of the cat\u0027s eye tends to give it a bluish tint. A beautiful black cat has so much melanin that it will have yellow, gold, or copper eyes, or the eyes may be greenish (as blue and yellow make green), really a green-yellow. But I have never seen a solid black cat with blue eyes, like a Siamese; they just have too much melanin.",
        "itemId": 3,
        "answers": [
            {
                "id": 93,
                "answer": "greenish",
                "isCorrect": false
            },
            {
                "id": 94,
                "answer": "yellow",
                "isCorrect": false
            },
            {
                "id": 95,
                "answer": "copper",
                "isCorrect": false
            },
            {
                "id": 96,
                "answer": "blue",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 29,
        "question": "9. If you find a beautiful black cat at a shelter, what kind of cat will it MOST likely be?",
        "isMultipleChoiceQuestion": true,
        "explanation": "A \"domestic shorthair\"*, whether black or any other color, is basically a short-haired cat of no particular breed. (In fact, 96% of cats on Earth are of no particular breed!) To find a black Sphynx or any other pedigreed cat in a shelter that would be astonishing and not very likely. A calico cat is by definition not solid black, but spotted or tri-colored, with black, red, and white. (Additionally it is most likely female.) A catamount is a cougar or mountain lion, not likely found at your local shelter.\n\n*Not to be confused with American shorthair or British shorthair, which are specific breeds.",
        "itemId": 3,
        "answers": [
            {
                "id": 97,
                "answer": "a black domestic shorthair",
                "isCorrect": true
            },
            {
                "id": 98,
                "answer": "a black catamount",
                "isCorrect": false
            },
            {
                "id": 99,
                "answer": "a black calico",
                "isCorrect": false
            },
            {
                "id": 100,
                "answer": "a black Sphynx",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 30,
        "question": "10. Black cats are among the most popular cats to be adopted from shelters in the USA.",
        "isMultipleChoiceQuestion": true,
        "explanation": "In fact, black cats are the least popular, and they are among the first to be euthanized. It\u0027s called \"black cat syndrome\", and there are many reasons for this. Whereas black cats are lucky in the UK, superstitions abound in the USA that black cats are unlucky or even diabolic. In many cases, black cats are perceived as less beautiful than tabby, tortoiseshell or white cats. It requires more skill to photograph a dark animal, so many shelters find it it challenging to promote these cats in newsprint or on the web. Therefore, if you are looking for a healthy, loving companion animal, consider adopting a beautiful black cat!",
        "itemId": 3,
        "answers": [
            {
                "id": 101,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 102,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 31,
        "question": "1. Polydactyly is an extremely rare trait among cats worldwide.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Polydactyls are fairly common in Southwest Britain, America\u0027s East coast, and Celtic areas, to name a few. They are also fairly well-known in the US, made famous in part by Hemingway\u0027s interest in them. They also used to account for nearly 40% of the Maine Coon breed, before the trait was deliberately bred out of them.",
        "itemId": 4,
        "answers": [
            {
                "id": 103,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 104,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 32,
        "question": "2. Polydactyly is generally a harmful mutation in cats.",
        "isMultipleChoiceQuestion": true,
        "explanation": "The most dominant form of polydactyly is harmless, although there is a less common form that indicates other genetic physiological problems with the cat.",
        "itemId": 4,
        "answers": [
            {
                "id": 105,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 106,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 33,
        "question": "3. Which of these names are polydactyls NOT commonly known as?",
        "isMultipleChoiceQuestion": true,
        "explanation": "They are called Hemingway cats because Hemingway had many of them. They are called thumb cats because many of them sport an \"opposable\" thumb that some of them can use to manipulate objects much as a human would use a thumb. Mine will actually hold objects in his \"hands.\"\n\nOk, my husband calls our cat a freak, but in a loving way, and it\u0027s not a common nickname for the breed.",
        "itemId": 4,
        "answers": [
            {
                "id": 107,
                "answer": "Mitten Cats",
                "isCorrect": false
            },
            {
                "id": 108,
                "answer": "Thumb Cats",
                "isCorrect": false
            },
            {
                "id": 109,
                "answer": "Hemingway Cats",
                "isCorrect": false
            },
            {
                "id": 110,
                "answer": "Freak Cats",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 34,
        "question": "4. There are cases of polydactyl humans.",
        "isMultipleChoiceQuestion": true,
        "explanation": "There are six-fingered humans.",
        "itemId": 4,
        "answers": [
            {
                "id": 111,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 112,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 35,
        "question": "5. Polydactyly in cats is unique to North American cats.",
        "isMultipleChoiceQuestion": true,
        "explanation": "One of the other names for a polydactyl cat is Cardi-cat, originating from Cardiganshire, in Wales.",
        "itemId": 4,
        "answers": [
            {
                "id": 113,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 114,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 36,
        "question": "6. Polydactyly is less common among cats than other mammals.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Polydactyly is more common in cats than other animals, perhaps because the location of the genes on the chromosomes make them more likely to mutate.",
        "itemId": 4,
        "answers": [
            {
                "id": 115,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 116,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 37,
        "question": "7. Polydactyly, in its more common and non-harmful manifestation, is a dominant trait.",
        "isMultipleChoiceQuestion": true,
        "explanation": "A couple definitions:\n\nheterozygous -- only one gene out of a pair selects for a certain trait\nhomozygous -- both genes in the pair select for the same trait\n\nThis explanation refers to the most prevalent, and harmless, form of polydactylism.\n\nIf both parents are polydactyl, the kittens will most likely be polydactyl as well, whether the parents were hetero- or homozygous polydactyl. If both parents are heterozygous for the trait, then 3/4 of the kittens should have extra toes.\n\nIf one parent is homozygous polydactyl, and the other parent is normal footed, all kittens will be heterozygous polydactyl (possessing extra toes).\n\nIf one parent is heterozygous polydactyl, and the other is normal footed, then half of the kittens will be heterozygous polydactyl.\n\nSince it only takes one gene selecting for polydactyly to give a cat extra toes, the polydactyl gene is dominant over the \"normal-footed\" gene.",
        "itemId": 4,
        "answers": [
            {
                "id": 117,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 118,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 38,
        "question": "8. What are the most common minor problems associated with polydactyls?",
        "isMultipleChoiceQuestion": true,
        "explanation": "My polydactyl, Ptero (as in ptero-dactyl, heehee), has some issues with two of his claws. The toes that would normally be the innermost toes, on the sides of the feet (what would pass for a \"thumb\" in a \"normal\" cat), is between the rest of the foot and his thumb, so when he scratches, it does not get stropped. I have to clip those two myself (which is not fun) to make sure they do not curve all the way around into his feet. I\u0027ve considered having those two toes declawed, and in fact, if I lived in the UK, this would be the only circumstances under which I could declaw my cat, legally, and then only the affected toes. Interesting, huh?",
        "itemId": 4,
        "answers": [
            {
                "id": 119,
                "answer": "joint problems (hip dysplasia, etc.)",
                "isCorrect": false
            },
            {
                "id": 120,
                "answer": "claw issues (ingrown nails, etc.)",
                "isCorrect": true
            },
            {
                "id": 121,
                "answer": "mental problems (stupidity, etc.)",
                "isCorrect": false
            },
            {
                "id": 122,
                "answer": "behavior problems (aggressiveness, etc.)",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 39,
        "question": "9. Why was polydactyly deliberately bred out of Maine Coons (a large cat characterized by its beautiful neck ruff of fur), despite folk belief that the extra toes acted as snowshoes and helped in hunting?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Polydactyls made up about 40% of Maine Coons, but the trait was almost completely bred out, and only recently have attempts been made to recover it. Cat show associations still do not allow polydactyls to win awards.",
        "itemId": 4,
        "answers": [
            {
                "id": 123,
                "answer": "polydactyly is ugly",
                "isCorrect": false
            },
            {
                "id": 124,
                "answer": "people in Maine didn\u0027t want their cats hunting",
                "isCorrect": false
            },
            {
                "id": 125,
                "answer": "breed standards made no allowance for extra toes",
                "isCorrect": true
            },
            {
                "id": 126,
                "answer": "polydactyly is a harmful mutation",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 40,
        "question": "10. Polydactyly can be found in large cats as well, such as leopards.",
        "isMultipleChoiceQuestion": true,
        "explanation": "There have been photographs and reports of polydactyl leopards, although it seems to be caused by a different gene than that of the domesticated cats. There are also unconfirmed reports of unusually large, thumb-footed tigers, although these may be exaggeration.",
        "itemId": 4,
        "answers": [
            {
                "id": 127,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 128,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 41,
        "question": "1. What is the mother\u0027s first priority for her new kitten?",
        "isMultipleChoiceQuestion": true,
        "explanation": "To prevent the kitten from suffocating the mother removes the sac from the kitten\u0027s face. Luckily cats have a very rough tongue which is perfect for this job and for stimulating the kitten further.",
        "itemId": 5,
        "answers": [
            {
                "id": 129,
                "answer": "To smell it",
                "isCorrect": false
            },
            {
                "id": 130,
                "answer": "To get it breathing",
                "isCorrect": true
            },
            {
                "id": 131,
                "answer": "To get it to feed",
                "isCorrect": false
            },
            {
                "id": 132,
                "answer": "To give it a bowl of food",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 42,
        "question": "2. As well as sustenance what does a mother\u0027s milk pass on to her kittens?",
        "isMultipleChoiceQuestion": true,
        "explanation": "If the kitten takes the milk within 24 hours from the birth the milk contains antibodies from infections which the cat has been vaccinated against, or has suffered from. This protection is only temporary unfortunately.",
        "itemId": 5,
        "answers": [
            {
                "id": 133,
                "answer": "A sense of his mother\u0027s smell",
                "isCorrect": false
            },
            {
                "id": 134,
                "answer": "Immunity from diseases",
                "isCorrect": true
            },
            {
                "id": 135,
                "answer": "Thicker fur",
                "isCorrect": false
            },
            {
                "id": 136,
                "answer": "The substance which makes cat\u0027s tongues rough",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 43,
        "question": "3. There are 4 basic stages to a cat\u0027s development. The Neonatal Phase, the Socialisation phase and the Adult phase are 3, what is the fourth?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The neonatal is the first 2 weeks, the socialisation phase is in weeks 3 to 8, the juvenile phase is from 9 weeks to around 7 months, and adulthood is from then on.",
        "itemId": 5,
        "answers": [
            {
                "id": 137,
                "answer": "Childish phase",
                "isCorrect": false
            },
            {
                "id": 138,
                "answer": "Youth phase",
                "isCorrect": false
            },
            {
                "id": 139,
                "answer": "Juvenile phase",
                "isCorrect": true
            },
            {
                "id": 140,
                "answer": "Infantile phase",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 44,
        "question": "4. When do the kittens\u0027 eyes open?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The most development goes on in the second week and female kittens\u0027 eyes tend to open earlier than males. Kittens that open their eyes early usually come from parents that had the same trait.",
        "itemId": 5,
        "answers": [
            {
                "id": 141,
                "answer": "1st day",
                "isCorrect": false
            },
            {
                "id": 142,
                "answer": "2 months",
                "isCorrect": false
            },
            {
                "id": 143,
                "answer": "4 to 6 weeks",
                "isCorrect": false
            },
            {
                "id": 144,
                "answer": "1 to 3 weeks",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 45,
        "question": "5. When does the kittens\u0027 hearing develop?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This is the week that ears unfold and ear canals develop. This will mean that kittens will react more to sounds now than in their first week. Some full white cats are born deaf, full white cats with blue eyes are almost certain to be deaf.",
        "itemId": 5,
        "answers": [
            {
                "id": 145,
                "answer": "5th week",
                "isCorrect": false
            },
            {
                "id": 146,
                "answer": "In the womb",
                "isCorrect": false
            },
            {
                "id": 147,
                "answer": "2nd week",
                "isCorrect": true
            },
            {
                "id": 148,
                "answer": "1st day",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 46,
        "question": "6. Which week do the kittens\u0027 milk teeth start to appear?",
        "isMultipleChoiceQuestion": true,
        "explanation": "A kitten will eventually develop 26 milk teeth. They get their adult teeth at 3 months.",
        "itemId": 5,
        "answers": [
            {
                "id": 149,
                "answer": "Day 1",
                "isCorrect": false
            },
            {
                "id": 150,
                "answer": "3 months",
                "isCorrect": false
            },
            {
                "id": 151,
                "answer": "Week 7",
                "isCorrect": false
            },
            {
                "id": 152,
                "answer": "Week 3",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 47,
        "question": "7. What week will the mother begin to discourage kittens from suckling, thus starting weaning?",
        "isMultipleChoiceQuestion": true,
        "explanation": "By the 6th week, a kitten should start to be interested in solid food.",
        "itemId": 5,
        "answers": [
            {
                "id": 153,
                "answer": "1st day",
                "isCorrect": false
            },
            {
                "id": 154,
                "answer": "10 weeks",
                "isCorrect": false
            },
            {
                "id": 155,
                "answer": "3 months",
                "isCorrect": false
            },
            {
                "id": 156,
                "answer": "6 weeks",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 48,
        "question": "8. Once kittens start interacting with other cats and humans they begin to use body language. For example, pricked ears and tail held high means a cat or kitten is feeling friendly and approachable. What does it mean when a cat or kittens\u0027 ears are flat against the head, the back is arched and the tail is completely erect?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The cat is probably in a state where it doesn\u0027t know whether to attack or defend. The last thing it wants to do is eat or sleep.",
        "itemId": 5,
        "answers": [
            {
                "id": 157,
                "answer": "The cat wants to eat",
                "isCorrect": false
            },
            {
                "id": 158,
                "answer": "The cat is asleep",
                "isCorrect": false
            },
            {
                "id": 159,
                "answer": "The cat is frightened",
                "isCorrect": true
            },
            {
                "id": 160,
                "answer": "The cat is having a seizure",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 49,
        "question": "9. Kittens can purr.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Kittens can purr from a very early age and the first instance would most usually be when feeding with its mother.",
        "itemId": 5,
        "answers": [
            {
                "id": 161,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 162,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 50,
        "question": "10. What is the very earliest date that a kitten should be rehomed?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This is when the kitten is developed enough to leave its mother. It is unfair to both mother and child to rehome at an earlier age. A few references will say that six weeks of age is a suitable age, but the vast majority of experts say eight weeks is the minimum age, with many saying ten or even twelve weeks is preferable.",
        "itemId": 5,
        "answers": [
            {
                "id": 163,
                "answer": "2 weeks",
                "isCorrect": false
            },
            {
                "id": 164,
                "answer": "8 weeks",
                "isCorrect": true
            },
            {
                "id": 165,
                "answer": "4 weeks",
                "isCorrect": false
            },
            {
                "id": 166,
                "answer": "16 weeks",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 51,
        "question": "1. What is the scientific name for catnip?",
        "isMultipleChoiceQuestion": true,
        "explanation": "In Italy catnip is called \u0027erba dei gatti\u0027, in German it\u0027s \u0027katzenminze\u0027, in Spain it is \u0027menta de gato\u0027, and the French call it \u0027herbe aux chats\u0027.",
        "itemId": 6,
        "answers": [
            {
                "id": 167,
                "answer": "Nepeta cataria",
                "isCorrect": true
            },
            {
                "id": 168,
                "answer": "Cataria euphoria",
                "isCorrect": false
            },
            {
                "id": 169,
                "answer": "Catsarrh calmosia",
                "isCorrect": false
            },
            {
                "id": 170,
                "answer": "Catus sassafras",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 52,
        "question": "2. Catnip is a member of what plant family?",
        "isMultipleChoiceQuestion": true,
        "explanation": "It is a perennial herb, also known as catmint, catnep, catswort, and fieldbalm.",
        "itemId": 6,
        "answers": [
            {
                "id": 171,
                "answer": "grass",
                "isCorrect": false
            },
            {
                "id": 172,
                "answer": "root",
                "isCorrect": false
            },
            {
                "id": 173,
                "answer": "weed",
                "isCorrect": false
            },
            {
                "id": 174,
                "answer": "mint",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 53,
        "question": "3. Big cats (lions, tigers, leopards, jaguars) enjoy catnip too.",
        "isMultipleChoiceQuestion": true,
        "explanation": "The behavior pattern associated with catnip is even thought to be related to predatory behavior...pawing and marking, clasping and rolling onto the side, and rhythmic kicking with the back feet are common to hunting behavior and the catnip response !",
        "itemId": 6,
        "answers": [
            {
                "id": 175,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 176,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 54,
        "question": "4. Catnip seeds are what size?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Catnip should be planted safe from cats in the neighborhood, or they will find it, and might destroy it before it can mature !",
        "itemId": 6,
        "answers": [
            {
                "id": 177,
                "answer": "very tiny...like coarse black pepper",
                "isCorrect": true
            },
            {
                "id": 178,
                "answer": "sesame seed size",
                "isCorrect": false
            },
            {
                "id": 179,
                "answer": "watermelon seed size",
                "isCorrect": false
            },
            {
                "id": 180,
                "answer": "pea size",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 55,
        "question": "5. Catnip has relaxing properties for humans too! How is it most commonly consumed?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Catnip tea assists in the relief of stress, headaches, tummy upsets and insomnia! It was a regular beverage in England before the introduction of tea from China.",
        "itemId": 6,
        "answers": [
            {
                "id": 181,
                "answer": "pizza topping",
                "isCorrect": false
            },
            {
                "id": 182,
                "answer": "soup",
                "isCorrect": false
            },
            {
                "id": 183,
                "answer": "tea",
                "isCorrect": true
            },
            {
                "id": 184,
                "answer": "ravioli filling",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 56,
        "question": "6. What other ways have humans used catnip?",
        "isMultipleChoiceQuestion": true,
        "explanation": "It was once believed that smoking the leaves would produce a mild hallucinogenic effect. Although this use has since been dispelled, it may work in some individuals....It was also believed to deter the \u0027evil-eye\u0027 from children given to fits, this because of its ability to calm an extremely agitated child and diminish nightmares !",
        "itemId": 6,
        "answers": [
            {
                "id": 185,
                "answer": "all of these",
                "isCorrect": true
            },
            {
                "id": 186,
                "answer": "rubbed into meat for flavor",
                "isCorrect": false
            },
            {
                "id": 187,
                "answer": "added to bath for skin irritations",
                "isCorrect": false
            },
            {
                "id": 188,
                "answer": "aromatherapy oil",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 57,
        "question": "7. Catnip is addictive to your cat.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Don\u0027t worry - it\u0027s completely safe and non-addictive...just be careful your cat doesn\u0027t accidentally swallow a cat toy laced with the herb !",
        "itemId": 6,
        "answers": [
            {
                "id": 189,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 190,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 58,
        "question": "8. The major component in catnip\u0027s volatile oil is similar in structure to the sedative ingredient found in ....?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The name of the chemical in catnip is \u0027nepetalactone\u0027. It is most potent when the oils in the leaves are crushed or chewed to release the scent.",
        "itemId": 6,
        "answers": [
            {
                "id": 191,
                "answer": "valerian root",
                "isCorrect": true
            },
            {
                "id": 192,
                "answer": "chamomile",
                "isCorrect": false
            },
            {
                "id": 193,
                "answer": "cat claw",
                "isCorrect": false
            },
            {
                "id": 194,
                "answer": "dandelion",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 59,
        "question": "9. Approximately how tall can a catnip plant grow?",
        "isMultipleChoiceQuestion": true,
        "explanation": "When the catnip plant starts getting buds, it\u0027s time to cut it back. Tie it in a bunch, and hang it up to dry in a warm dark place...away from cats !",
        "itemId": 6,
        "answers": [
            {
                "id": 195,
                "answer": "6-12 inches",
                "isCorrect": false
            },
            {
                "id": 196,
                "answer": "3-4 feet",
                "isCorrect": true
            },
            {
                "id": 197,
                "answer": "1-2 feet",
                "isCorrect": false
            },
            {
                "id": 198,
                "answer": "4-5 feet",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 60,
        "question": "10. The average catnip \u0027high\u0027 lasts...?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Catnip can also improve your cat\u0027s health. By engaging your cat in play with toys containing catnip, you can encourage your older or overweight kittencat to exercise more ... (that\u0027s for you, Wilzy !)",
        "itemId": 6,
        "answers": [
            {
                "id": 199,
                "answer": "30 seconds",
                "isCorrect": false
            },
            {
                "id": 200,
                "answer": "6 hours",
                "isCorrect": false
            },
            {
                "id": 201,
                "answer": "30 minutes",
                "isCorrect": false
            },
            {
                "id": 202,
                "answer": "6 minutes",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 61,
        "question": "1. Your kitty takes one sniff of the pate de foie gras for which you paid $20.00 a tiny jar and scratches vigorously at the carpet you set her dish on. What is she telling you?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Anytime that something offends your cat\u0027s nose, she will want to bury it. This is true even if she liked the item the last time she had it. Cats do not bury food for later snacking but they might hide it so other predators won\u0027t come around and grab it. Missy has hidden much prized bits of ham or chicken in shoes, behind the couch and even in my bed! There\u0027s nothing quite like three day old chicken in your shoe. Most cats object strenuously to having their claws clipped and I\u0027ve never known a cat to really care where she eats her favorite treats.",
        "itemId": 7,
        "answers": [
            {
                "id": 203,
                "answer": "\"This stuff smells like poop! It should be buried in my litter box.\"",
                "isCorrect": true
            },
            {
                "id": 204,
                "answer": "\"My claws need clipping, human.\"",
                "isCorrect": false
            },
            {
                "id": 205,
                "answer": "\"Wow, this stuff is too good to eat now. I\u0027ll dig it up later to snack on.\"",
                "isCorrect": false
            },
            {
                "id": 206,
                "answer": "\"Please put this in the kitchen where I usually eat.\"",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 62,
        "question": "2. You are taking your cat to his vet for his annual check up and shots. You wrestle him into his cat carrier and he immediately starts purring loudly. Maybe he\u0027s happy to be going to the vet, you think. Yet when you get to the animal hospital he shows definite signs of fear. Why was he purring in the car?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Observing domestic cats in many situations, researchers now believe that self-soothing is one of the reasons our small friends purr when injured or stressed. The other answers are clearly false. No small animal loves seeing the vet in her professional capacity although they might like her as an individual. Cats usually want to be in control, especially of their own bodies. So car rides are usually causes for cat protests. And while little Toby or Princess truly loves you and wants to be with you, they rarely want to participate in unpleasant activities like taking baths or riding in cars.",
        "itemId": 7,
        "answers": [
            {
                "id": 207,
                "answer": "He likes the vet.",
                "isCorrect": false
            },
            {
                "id": 208,
                "answer": "Cats will sometimes purr to comfort themselves and relieve anxiety.",
                "isCorrect": true
            },
            {
                "id": 209,
                "answer": "He likes the car ride.",
                "isCorrect": false
            },
            {
                "id": 210,
                "answer": "He loves to be with you no matter where you are going.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 63,
        "question": "3. Cats are obligate carnivores, meaning that they get all their required nutrition from meat. So why does your beloved feline eat grass...and then produce a pile of vomitus with grass strands for you clean up?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Yes, all of these are reasons that cats eat grass, to medicate themselves and rid themselves of internal problems. Smart kitties!",
        "itemId": 7,
        "answers": [
            {
                "id": 211,
                "answer": "To clear the stomach of indigestible matter like fur, feathers \u0026 bones.",
                "isCorrect": false
            },
            {
                "id": 212,
                "answer": "All of these are thought by pet experts to be true.",
                "isCorrect": true
            },
            {
                "id": 213,
                "answer": "To act as a laxative and rid the bowels of indigestibles further down in the intestines.",
                "isCorrect": false
            },
            {
                "id": 214,
                "answer": "Cats don\u0027t have the right enzymes to break down vegetable matter.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 64,
        "question": "4. Your new cat was rescued from a hard life on the streets, bathed, defleaed, dewormed and chipped plus she was spayed. You took her home, named her Cleo, showed her her litter box and new toys, fed her and then turned in after a tiring day. In the morning you fed her then settled down to read the morning paper. Pretty soon you see Cleo walk past with something in her mouth. Curious, you follow her to her food bowl where the object she had in her mouth now resides. But why would she bring your underpants to her bowl?",
        "isMultipleChoiceQuestion": true,
        "explanation": "I had a cat that always nabbed my clothes and put them near her bowl to protect her and comfort her. It was usually underwear but she used my jogging pants one time. If your smell repulsed her, she would let you know by shaking her paw at you. If you really repulsed her she\u0027d shake all four paws in turn, what we call the four-paw salute. Cats do exhibit nesting behavior when they are about to go into labor, but not when they\u0027ve been spayed. Roman kitties did NOT lie on their sides to eat their meals. They probably scrounged bits of dropped food under the noble Romans\u0027 couches.",
        "itemId": 7,
        "answers": [
            {
                "id": 215,
                "answer": "Your smell repulses her just like this new food, so she\u0027s putting them together.",
                "isCorrect": false
            },
            {
                "id": 216,
                "answer": "Your smell, which she now associates with good things, comforts and protects her while she concentrates on food.",
                "isCorrect": true
            },
            {
                "id": 217,
                "answer": "She\u0027s \"nesting\" because she thinks that she\u0027s having kittens.",
                "isCorrect": false
            },
            {
                "id": 218,
                "answer": "She wants to lie on your soft clothing and eat like Roman cats used to.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 65,
        "question": "5. Your cat is getting used to her new home and you. One morning she does something she\u0027s never done before: she presses her forehead to yours. What is this behavior called and why did she do it?",
        "isMultipleChoiceQuestion": true,
        "explanation": "There are scent glands nearly everywhere on a cat\u0027s head. Your cat is adding her smell to you by bunting, thus showing her love and claiming you as her own.",
        "itemId": 7,
        "answers": [
            {
                "id": 219,
                "answer": "It\u0027s called bunting and she does it to show affection and ownership.",
                "isCorrect": true
            },
            {
                "id": 220,
                "answer": "It\u0027s called bashing and she does it to annoy you.",
                "isCorrect": false
            },
            {
                "id": 221,
                "answer": "It\u0027s called mugging and she does it to warn you away from her bowl.",
                "isCorrect": false
            },
            {
                "id": 222,
                "answer": "It\u0027s called clunking and she only does it to you as a greeting.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 66,
        "question": "6. You take pride in your male cat\u0027s natural state. He\u0027s a real Tom about town. But you are dismayed by his horrible wounds: the chewed half ear, the abscessed bite on the shoulder, the cut above his eye. You take him to the vet and the vet tells you to do something that will keep him at home, end the fights and prevent feline AIDS and leukemia. What is this one thing?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Unneutered male cats are likely to die 62% earlier than neutered ones. They are prone to infection from other male cats they\u0027ve battled as well as infection from unneutered female cats.\n\nChipping your cat is a great way to identify him if he is lost but does nothing to cut down on fights.\n\nHe\u0027d have the boots off in less than a minute. Besides, as anyone who has ever had a cat will tell you, they can\u0027t be shamed. That\u0027s why a good talking to and punishment would have been useless. You\u0027d be wasting your time and boring the cat.",
        "itemId": 7,
        "answers": [
            {
                "id": 223,
                "answer": "Put a microchip in his ear to identify him.",
                "isCorrect": false
            },
            {
                "id": 224,
                "answer": "Neuter him.",
                "isCorrect": true
            },
            {
                "id": 225,
                "answer": "Dress him in pink boots.",
                "isCorrect": false
            },
            {
                "id": 226,
                "answer": "Give him a good talking to and punish him.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 67,
        "question": "7. You need to go to the bathroom and would be glad for some privacy. But your cat has to be in there with you, rubbing his cheeks along your legs, weaving around the toilet and helping himself to the toilet paper. All attempts to lock him out are met with howls of complaint. What\u0027s this behavior all about?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats live in a world of smells and our wastes are no more hideous to them than their own. In fact, because we are top cats in our homes, our smells may seem like a simple announcement of our status to our cats. And if we lock them out of the potty, we are sure to see furry toes trying to reach us under the door.",
        "itemId": 7,
        "answers": [
            {
                "id": 227,
                "answer": "Cats want to be sure that we don\u0027t fall asleep on the giant water bowl.",
                "isCorrect": false
            },
            {
                "id": 228,
                "answer": "Cats want to be sure that we bury our wastes.",
                "isCorrect": false
            },
            {
                "id": 229,
                "answer": "Cats believe that the entire house is THEIR territory and they must know what\u0027s going on in it.",
                "isCorrect": true
            },
            {
                "id": 230,
                "answer": "Cats like the smells we produce in there.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 68,
        "question": "8. We are visiting Cleo and her new family again. Cleo has made big strides in being domesticated. Recently, she lay on her back with her legs wide open and slept. What is Cleo telling her owners?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cleo is a completely trusting cat! She\u0027s very vulnerable in this position since it exposes her belly and its contents to predators. She\u0027s showing you just how much she trusts you! Cats don\u0027t ask to be spayed. Some do ask to be brushed but that involves pointedly walking in front of you while rubbing against your hands. There\u0027s never been an actual sleep apnea diagnosis for cats. They spend nearly 3/4s of their lives sleeping and, while some cats do snore, most just breathe normally.",
        "itemId": 7,
        "answers": [
            {
                "id": 231,
                "answer": "That she\u0027s ready to be brushed.",
                "isCorrect": false
            },
            {
                "id": 232,
                "answer": "That she needs to be spayed.",
                "isCorrect": false
            },
            {
                "id": 233,
                "answer": "That she trusts them completely and feels safe in her new home.",
                "isCorrect": true
            },
            {
                "id": 234,
                "answer": "That she\u0027s got feline sleep apnea.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 69,
        "question": "9. You just made yourself a cup of cocoa, asked your man Jeeves to light a fire in the living room and settled into your most comfortable arm chair with a good book. Your cat suddenly appeared on your lap and began digging her claws lightly into your stomach one paw then the next, rhythmically. She begins to purr and drool on your clothes. What is Bootsie doing to you?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Kneading gave the mom signals to let down her milk and created a bond between mom and kittens. So Bootsie is remembering her contented kittenhood.",
        "itemId": 7,
        "answers": [
            {
                "id": 235,
                "answer": "Beating their prey makes it soft enough to eat.",
                "isCorrect": false
            },
            {
                "id": 236,
                "answer": "\"Making biscuits\" is a way to assert dominance.",
                "isCorrect": false
            },
            {
                "id": 237,
                "answer": "Flexing exercises their toes and eases toe cramps.",
                "isCorrect": false
            },
            {
                "id": 238,
                "answer": "Kneading is an activity that calms and relaxes adult cats.",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 70,
        "question": "10. Tigger is usually a happy cat who loves to sit in the sunshine. Today, however, he\u0027s pacing in front of the back yard door, hissing and growling at something you can\u0027t see. He puffs up his fur and arches his back. What is Tigger doing and why?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats are very territorial, as we\u0027ve seen, and they will fight viciously to defend what is theirs. The arched back and puffed up fur are ways to appear bigger to their enemies. It may seem funny to us but it\u0027s deadly stuff to your cat. Nature set him up to hunt alone and not in packs. Therefore, encroachment on his territory is tantamount to reduced food resources for him.",
        "itemId": 7,
        "answers": [
            {
                "id": 239,
                "answer": "Tigger is afraid of you and is trying to get away.",
                "isCorrect": false
            },
            {
                "id": 240,
                "answer": "Tigger is ready to defend his territory from an enemy he can smell and is letting everyone know it.",
                "isCorrect": true
            },
            {
                "id": 241,
                "answer": "Tigger was hunting and got sprayed by a skunk.",
                "isCorrect": false
            },
            {
                "id": 242,
                "answer": "Tigger is lonely and is trying to play with you.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 71,
        "question": "1. Cats and humans belong to which class of animals?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Mammals are a group of warmblooded animals. Mammals tend to have features that make them easily distinguished from other classes of animals. Mammals tend to be covered with hair, the females produce milk for their developing young and they possess the innate ability to regulate their body temperature. The hearts of all mammals are divided into four chambers. The largest animals of the world fall into the category of mammals. Animals such as cats, elephants, whales and even human and primates are mammals.",
        "itemId": 8,
        "answers": [
            {
                "id": 243,
                "answer": "Reptiles",
                "isCorrect": false
            },
            {
                "id": 244,
                "answer": "Mammals",
                "isCorrect": true
            },
            {
                "id": 245,
                "answer": "Birds",
                "isCorrect": false
            },
            {
                "id": 246,
                "answer": "Fish",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 72,
        "question": "2. Cats and humans have skeletons made up of what?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Most living organisms are made up of a structure system that gives their body support and resistance from collapsing. Without this support system, vital organs and internal matter would be vulnerable to damage and injure. The skeletal system can be made up of a variety of material, but the typical skeleton system in mammals, birds, reptiles, fishes and amphibians is made up of bone.",
        "itemId": 8,
        "answers": [
            {
                "id": 247,
                "answer": "Water",
                "isCorrect": false
            },
            {
                "id": 248,
                "answer": "Chitin",
                "isCorrect": false
            },
            {
                "id": 249,
                "answer": "Bone",
                "isCorrect": true
            },
            {
                "id": 250,
                "answer": "Cellulose",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 73,
        "question": "3. The skeletons of both cats and humans can be described as which type?",
        "isMultipleChoiceQuestion": true,
        "explanation": "A skeleton system can be described as exoskeleton or endoskeleton. Organisms with an exoskeleton system have their support structure on the outside of their body. Those with an endoskeleton system have a structural support system that is inside their body.",
        "itemId": 8,
        "answers": [
            {
                "id": 251,
                "answer": "Exoskeleton",
                "isCorrect": false
            },
            {
                "id": 252,
                "answer": "Introskeleton",
                "isCorrect": false
            },
            {
                "id": 253,
                "answer": "Intraskeleton",
                "isCorrect": false
            },
            {
                "id": 254,
                "answer": "Endoskeleton",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 74,
        "question": "4. Both adult female cats and humans produce this nourishment to feed to their growing and developing offspring?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Colostrum is a precursor to milk. It is generated and secreted by the mammary glands. Colostrum does contain milk as well as antibodies that aid the newborn in defense against disease and illness. A newborn\u0027s immune system is relatively immature at birth, thus colostrum is introduce into the baby\u0027s body to serve as the secondary defense against pathogens as well as a mild laxative which prompts the passage of stool.\n\nAll other listed above would be hazardous to a infant if introduced into the infant\u0027s body.",
        "itemId": 8,
        "answers": [
            {
                "id": 255,
                "answer": "Colostrum",
                "isCorrect": true
            },
            {
                "id": 256,
                "answer": "Gasoline",
                "isCorrect": false
            },
            {
                "id": 257,
                "answer": "Sulphuric Acid",
                "isCorrect": false
            },
            {
                "id": 258,
                "answer": "Alcohol",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 75,
        "question": "5. Cats and humans both can see. Both cats and humans use which sensory organ to visualize objects?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Oculus is the scientific term that describes the eye, the visual organ. Cats and humans both use this organ to see distant or near objects. Cats may see better in the dark than humans but the fact remains they both can visualize objects.",
        "itemId": 8,
        "answers": [
            {
                "id": 259,
                "answer": "Auricle",
                "isCorrect": false
            },
            {
                "id": 260,
                "answer": "Oculus",
                "isCorrect": true
            },
            {
                "id": 261,
                "answer": "Nasal cavum nasale",
                "isCorrect": false
            },
            {
                "id": 262,
                "answer": "Mammary papillas",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 76,
        "question": "6. Cats and humans can both hear sounds. Both cats and humans have a hearing organ that enables them to do just that. Both cats and humans use which organ to hear vibrating sounds?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Auricle is the scientific term that describes the ear, the hearing organ. This organ receives sound and converts the vibrating sound to electrical impulses that can be detected and interpreted by the nervous system. This is the mechanism the body uses to interpret speech and language.",
        "itemId": 8,
        "answers": [
            {
                "id": 263,
                "answer": "Nasal cavum nasale",
                "isCorrect": false
            },
            {
                "id": 264,
                "answer": "Oculus",
                "isCorrect": false
            },
            {
                "id": 265,
                "answer": "Mammary papillas",
                "isCorrect": false
            },
            {
                "id": 266,
                "answer": "Auricle",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 77,
        "question": "7. Cats and humans have the ability to detect odors in the air and also to determine the nature and origin of this odor. Both cats and humans use which organ to smell distinct odors?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Nasal cavum nasale is the scientific term that describes the nose, the organ used to smell odors. Odors reach the nose as chemical stimuli and are transported to the brain via the olfactory nerve to be received and interpreted as electrical impulses.",
        "itemId": 8,
        "answers": [
            {
                "id": 267,
                "answer": "Nasal cavum nasale",
                "isCorrect": true
            },
            {
                "id": 268,
                "answer": "Mammary papillas",
                "isCorrect": false
            },
            {
                "id": 269,
                "answer": "Oculus",
                "isCorrect": false
            },
            {
                "id": 270,
                "answer": "Auricle",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 78,
        "question": "8. Cats and humans nurse their young while they develop and grow. The female of each species has specialized glands that produce and secrete milk. Both cats and humans use which organ to feed their young?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Mammary papillas is the scientific term that refers to breast, the organs that produces milk. Glands in the mammary papillas that manufacture and secrete milk are specialized fat cells. These fat cells have inherited the ability to manufacture and store milk until secretion only when initiated by the hormone prolactin.",
        "itemId": 8,
        "answers": [
            {
                "id": 271,
                "answer": "Nasal cavum nasale",
                "isCorrect": false
            },
            {
                "id": 272,
                "answer": "Auricle",
                "isCorrect": false
            },
            {
                "id": 273,
                "answer": "Oculus",
                "isCorrect": false
            },
            {
                "id": 274,
                "answer": "Mammary papillas",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 79,
        "question": "9. Which bone forms the tail end in both humans and cats?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The coccyx is commonly referred to as the tailbone. It is the terminal end of the vertebral column in mammals. In humans, this bone serves mainly in a structural capacity. However, in cats and other animals, it forms the basis of the tail and enables motion and control of the animal\u0027s tail.",
        "itemId": 8,
        "answers": [
            {
                "id": 275,
                "answer": "Clavicle",
                "isCorrect": false
            },
            {
                "id": 276,
                "answer": "Pollex",
                "isCorrect": false
            },
            {
                "id": 277,
                "answer": "Patella",
                "isCorrect": false
            },
            {
                "id": 278,
                "answer": "Coccyx",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 80,
        "question": "10. Both cats and humans have a number of biological systems that function effectively to maintain an internal balance; how many?",
        "isMultipleChoiceQuestion": true,
        "explanation": "There are 11 systems in the human body: the circulatory system which includes the heart, blood and blood vessels; the respiratory system which includes nose, trachea, and lungs; the immune system which is the defense mechanism of the body; the excretory system which includes lungs, large intestine and kidneys; the urinary system which includes the bladder and kidneys; the muscular system which is the muscles; the endocrine system which includes the glands of the body; the digestive system which includes mouth, esophagus, stomach and intestines; the nervous system which includes the brain, spinal cord and nerves; the skeletal system, which includes the bones, and the reproductive system which includes male and female reproductive organs.",
        "itemId": 8,
        "answers": [
            {
                "id": 279,
                "answer": "11",
                "isCorrect": true
            },
            {
                "id": 280,
                "answer": "110",
                "isCorrect": false
            },
            {
                "id": 281,
                "answer": "1",
                "isCorrect": false
            },
            {
                "id": 282,
                "answer": "1110",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 81,
        "question": "1. Cats are mainly nocturnal/crepuscular.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Nocturnal refers to animals that are usually more active during the night than the day. They also have special adaptations that help them survive in the dark. For example, many nocturnal animals (including cats) have special eyes that see well in the dark. Also, good hearing can be very helpful for night animals, and cats happen to be creatures with excellent hearing. So, with excellent eyesight and hearing, cats get along pretty well in the dark hours of the night.\n\nI have reviewed some information that states cats as being \"crepuscular\" rather than \"nocturnal\". For those interested in reading further about this, please visit:\n\nhttp://en.wikipedia.org/wiki/Cat\n\nhttp://en.wikipediaorg/wiki/Crepuscular\n\n\nNote however, that most resources do state cats as being \"nocturnal\", and therefore that\u0027s why I have left the question statement as being true.",
        "itemId": 9,
        "answers": [
            {
                "id": 283,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 284,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 82,
        "question": "2. Cats see only in black and white.",
        "isMultipleChoiceQuestion": true,
        "explanation": "From the research I\u0027ve done, I found that most experts on this subject do believe cats see in color. Cats seem to respond to the colors purple, blue, green, and yellow with blue and green being the strongest colors they perceive. Red, orange, and brown colors appear to fall outside a cat\u0027s color range and are believed to be seen as shades of gray or purple.",
        "itemId": 9,
        "answers": [
            {
                "id": 285,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 286,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 83,
        "question": "3. Cats are carnivores.",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"A carnivore means a true meat-eating animal, and our feline friends are classified as true carnivores because they MUST consume meat in order to survive. The cat cannot sustain its life unless it consumes meat in some form. This is for several major reasons. First, the essential amino acid taurine and the essential fatty acid arachidonic acid are only present in animal tissue. Taurine is important for healthy functioning of the heart, retina, bile fluid and certain aspects of reproduction. Cats must eat preformed Taurine and since Taurine is not found in plant tissues, cats MUST consume meat to obtain Taurine. Arachidonic acid is another essential fatty acid that plays a role in fat utilization and energy production, and cats cannot make their own Arachidonic acid. The reason cats can\u0027t make this is because the cat\u0027s chemical factory (liver) contains no delta-6-desaturase enzyme to convert linoleic to Arachidonic. Another reason cats are classified as true carnivores is that of the vitamins. Cats cannot convert betacarotene from plants into vitamin A, nor can they convert biotin into the B vitamin called niacin; therefore, both of these vitamins must come from animal tissue. Cats, unlike dogs, require some of their energy to come from protein; they also have higher requirements for some specific amino acids and vitamins. For all these reasons, CATS SHOULD NOT BE FED DIETS FORMULATED FOR DOGS OR VEGETARIAN DIETS.\"\n\nThis quoted information can be found at:\nwww.sniksnak.com/cathealth/howto9.html and www.thepetcenter.com/imtop/catsaredif.html",
        "itemId": 9,
        "answers": [
            {
                "id": 287,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 288,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 84,
        "question": "4. Cats have whiskers on the backs of their front legs.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Yes, they do. They\u0027re not too far above the paw pads and they\u0027re shorter than the ones found around the face. Whiskers are twice as thick as a cat\u0027s ordinary hair and have deep roots that are surrounded by nerves and blood vessels. A cat\u0027s whiskers are very sensitive and should never be trimmed.",
        "itemId": 9,
        "answers": [
            {
                "id": 289,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 290,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 85,
        "question": "5. Cats have a better sense of smell than humans.",
        "isMultipleChoiceQuestion": true,
        "explanation": "The cat\u0027s sense of smell is its primary source for identifying the individuals and objects in its environment. They have 200 million odor-sensitive cells in their noses compared to only 5 million for humans. Cats live in a sensory world completely apart from ours. A cat\u0027s sense of smell plays a very significant role in their relationships with humans and their responses to the environment, which sometimes may result in some puzzling and disturbing behaviors. For example, a cat may refuse to use the litterbox because its owner filled it with a perfume scented litter, and the perfume is actually a repellent for cats.",
        "itemId": 9,
        "answers": [
            {
                "id": 291,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 292,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 86,
        "question": "6. Cats with ringworm are infected with worms that form circular shapes underneath the surface of the skin.",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"Despite the name, ringworm is not a worm but a fungal disease. One of the most common skin problems of cats, ringworm invades the hair follicle. The name, ringworm, comes from the appearance of the skin lesion. A red ring outlines a circular patch of scaly skin and broken-off hairs.\"\nSource: \"Think Like A Cat\", a book by Pam Johnson-Bennett",
        "itemId": 9,
        "answers": [
            {
                "id": 293,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 294,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 87,
        "question": "7. It\u0027s normal for cats to regularly breathe through their mouths.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats do sometimes breathe through their mouths. For example, if they\u0027ve been running around playing or chasing something, they may need a minute to catch their breath. Also, (I experienced this with my own cat) they may breathe through their mouth if they have an upper respiratory infection. Most of the time, however, cats only breathe through their noses when breathing normally.",
        "itemId": 9,
        "answers": [
            {
                "id": 295,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 296,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 88,
        "question": "8. Cats have incredibly acute hearing.",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"At lower-pitched sounds, there is little difference between humans and cats (and dogs). At the higher sounds, humans can hear up to approximately 20,000 cycles per second. Dogs can hear sounds of frequencies of up to 35,000 to 45,000 cycles. Cats can hear sounds of an amazingly high pitch--sounds up to 100,000 cycles per second! Interestingly, the highest pitched squeak that a mouse can make is approximately the same frequency--100,000 cycles per second. That is no coincidence. Cats\u0027 hearing evolved to enable them to be better hunters. Cats hunt by lurking in ambush and listening very closely for the slightest squeak or rustle of their prey. Their incredibly sensitive hearing allows them to be very effective at this task.\"\nSource: www.crazyforkitties.com/fow/fow6.shtml",
        "itemId": 9,
        "answers": [
            {
                "id": 297,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 298,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 89,
        "question": "9. Chocolate can be toxic to cats.",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"Chocolate contains an ingredient called theobromine that is very toxic to cats which can affect four areas of the cat\u0027s body. It can increase the cat\u0027s heartrate, it can act as a diuretic causing the cat to lose body fluids, it can affect the gastrointestinal system causing vomiting and diarrhea and could also cause stomach ulcers. And, it can act on the nervous system causing convulsions, seizures and sometimes even death.\"\n(Source: www.lovingchocolate.com/html/pets.html)",
        "itemId": 9,
        "answers": [
            {
                "id": 299,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 300,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 90,
        "question": "10. Cats use their whiskers to detect whether they\u0027ll be able to pass through an opening or not.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats can use their whiskers for several things and one of them is to detect sizes of openings. A cat\u0027s whiskers grow accordingly to accommodate the cat in perceiving whether or not it can easily pass through something such as a passageway, or if it may become stuck. Other uses of the whiskers are a cat\u0027s way to indicate their mood and for the catching of prey.",
        "itemId": 9,
        "answers": [
            {
                "id": 301,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 302,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 91,
        "question": "11. Picking cats up by the scruff and carrying them long distances is always the best method of restraining them.",
        "isMultipleChoiceQuestion": true,
        "explanation": "No, because there is potential harm that can affect a cat being restrained by the scruff. Based on the research I\u0027ve done, I\u0027ve found that picking cats up by the scruff can cut off their oxygen supply and put strain on their neck muscles when their hind quarters are in a dangling-like position, and they\u0027re carried in this manner for substantial distances.\nA veterinary nurse did inform me, however, that picking cats up by the scruff is considered common practice as long as the cat isn\u0027t carried that way for too long of a distance. Also, if you\u0027re able to support the hind quarters of the cat while holding it by the scruff, this is considered a safe way of handling a cat by its scruff.\nFurthermore, a fellow trivia player shared with me that they had learned in a veterinary assistant course that scruffing of the brachiocephalic or pug face classification of cats (such as persians and himalayans; or any breed of cats with very flat faces) can cause retinal damage. Whereas, back again to the opposite side of things, another fellow trivia player has also shared with me that gentle pinching of the scruff helps to release endorphins of which can help calm nervous and/or agitated cats. So, as for my own personal thought on scruffing, I think it\u0027s probably best for me not to handle my cats that way and to just leave it to those in the veterinary profession who know more of what they\u0027re doing. I would also like to say thank you here to those who shared their info with me to share with others concerning this issue on cat scruffing.",
        "itemId": 9,
        "answers": [
            {
                "id": 303,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 304,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 92,
        "question": "12. Aspirin can be deadly for cats.",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"Cats do not have enough necessary enzymes in the liver to allow normal metobolization of aspirin; therefore, resulting in a very slow break down process of the aspirin which can lead to toxicity levels and possibly even death when given more frequently than once every 48 hours at a dosage of more than 81 mg.\"\nSources: www.vetinfo.com/catmed.html and www.petcare.umn.edu",
        "itemId": 9,
        "answers": [
            {
                "id": 305,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 306,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 93,
        "question": "13. Short tails on cats are known as stud tails.",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"Stud tail is an infection on a cat\u0027s tail caused from overproducing sebacceous glands. It\u0027s seen more often in unaltered males and the tail appears dirty and greasy and gives off an odor. Treatment for this condition can include washing the tail in a medically prescribed shampoo on a regular basis. Also, antibiotics or even surgery may be required if there\u0027s inflammation, and neutering of the intact cat is recommended.\"\nSource: \"Think Like A Cat\" by Pam Johnson-Bennett",
        "itemId": 9,
        "answers": [
            {
                "id": 307,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 308,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 94,
        "question": "14. Cats can develop feline acne.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Yes, this is true. Feline acne is most commonly found on the cat\u0027s chin appearing as blackheads or pimples. There seem to be many beliefs about the causes of feline acne which vary from food allergies, contact allergies, and some experts even believe stress may play a part. This condition is also believed to be caused by lack of grooming to the chin where dirt and oil can accumulate and cause the hair follicles to become clogged. The most common belief, however, is that cats who eat and drink out of plastic bowls may be more prone to this condition simply because plastic is supposedly more difficult to keep clean. For me, my cats have always been given their food and water in plastic bowls for which I have had no problems keeping clean. And so far, they\u0027ve never had any problems with feline acne either, thank goodness.",
        "itemId": 9,
        "answers": [
            {
                "id": 309,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 310,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 95,
        "question": "15. The feline AIDS virus is the same virus that causes AIDS in people.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Feline AIDS, also known as Feline Immunodeficiency Virus (FIV), has similarities to that of the human AIDS virus but is not the same virus. From my research, I found that most viruses are species specific, meaning that the AIDS virus only affects humans and the FIV only affects cats. Well, I hope you liked the quiz and possibly learned some new facts concerning cats, I know that I sure did when creating it.",
        "itemId": 9,
        "answers": [
            {
                "id": 311,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 312,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 96,
        "question": "1. Therapy cats have clinically demonstrated several effects on patients, except for which one of these options?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats cannot restore vision in the center visual field (the macula), but they can restore a sense of well-being to people who interact with them. They make people feel safe and accepted, so their therapeutic value is mostly on the emotional level, although there are measurable physical effects such as the lowering of blood pressure.",
        "itemId": 10,
        "answers": [
            {
                "id": 313,
                "answer": "Reduced hypertension",
                "isCorrect": false
            },
            {
                "id": 314,
                "answer": "Reduced macular degeneration",
                "isCorrect": true
            },
            {
                "id": 315,
                "answer": "Reduced anxiety",
                "isCorrect": false
            },
            {
                "id": 316,
                "answer": "Increased sensory stimulation",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 97,
        "question": "2. Cats in nursing homes have specific effects on the behavior of elderly residents. Which is NOT one that researchers have found a correlation?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The Naperville Area Humane Society of Illinois reports that in a review of 25 studies in nursing homes, alertness and smiles increased among residents, while the cats appeased aggressive residents who then allowed staff and fellow residents to approach them. They also found that petting and grooming the cats stimulated memories, even in Alzheimer\u0027s patients, and additionally provided mild exercise, a real concern in a facility where everyone is sedentary. Playing with cat toys (with the cat, of course) also improved the patients\u0027 flexibility.",
        "itemId": 10,
        "answers": [
            {
                "id": 317,
                "answer": "Residents smiled more",
                "isCorrect": false
            },
            {
                "id": 318,
                "answer": "Residents\u0027 hearing improved",
                "isCorrect": true
            },
            {
                "id": 319,
                "answer": "Residents were more alert",
                "isCorrect": false
            },
            {
                "id": 320,
                "answer": "Aggressive residents calmed down",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 98,
        "question": "3. Sometimes therapy cats that live in nursing homes will seek out a resident facing imminent death, and stay with the resident until he or she expires and someone removes the body.",
        "isMultipleChoiceQuestion": true,
        "explanation": "This is not a myth! David Dosa, a staff doctor at Steere House Nursing and Rehabilitation Center in Providence, Rhode Island, wrote a book called \"Making Rounds with Oscar\" (2011) about just such a cat. Some physicians speculate that Oscar may have been attracted to the patients\u0027 breath, which would smell of ketones produced by the breakdown of cells. Oscar was one of six cats residing at Steere House, a pet-friendly facility that permits animals to visit or live on-site.",
        "itemId": 10,
        "answers": [
            {
                "id": 321,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 322,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 99,
        "question": "4. Therapy cats are not just for hospitals and nursing homes, of course. Several other kinds of facilities throughout the USA have used therapy cats. Which of these places, however, is not among them?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats are not used at allergy treatment centers, especially as they may be a source of problems for people allergic to proteins in feline dander, urine and saliva. In all the other places, and more than I can list here, therapy cats have improved the lives of many who suffer from handicaps, loneliness, and despondency. The J.W. Sommers Rehabilitation Unit in Muscle Shoals, Alabama, for example, uses Sphynx cats in its therapy program for patients. The Providence Speech and Hearing Center in Orange Country, California, brings in therapy cats periodically to help children with communication skills.\n\nWhen therapy cats live at the facility that utilizes them, sometimes they will do what cats do and wander off. In 2012, an eight-year-old tabby named Chester, who lived at a facility for special-needs children in Nanuet, New York, was found three miles from his home.",
        "itemId": 10,
        "answers": [
            {
                "id": 323,
                "answer": "Children\u0027s speech and hearing centers",
                "isCorrect": false
            },
            {
                "id": 324,
                "answer": "Centers for the autistic and developmentally disabled",
                "isCorrect": false
            },
            {
                "id": 325,
                "answer": "Juvenile detention centers",
                "isCorrect": false
            },
            {
                "id": 326,
                "answer": "Allergy treatment centers",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 100,
        "question": "5. By the early 21st century, were cats the most favored recruit as a therapy animal?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Actually, dogs remained the number one choice for therapy, followed by horses, and then cats, through the late 20th century and into the 21st. Nonetheless, the use of cats increased during that period according to Pet Partners, Inc., a non-profit organization specializing in placing therapy animals.",
        "itemId": 10,
        "answers": [
            {
                "id": 327,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 328,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 101,
        "question": "6. To qualify as a therapy cat in New York State and many other US states, a cat must do what?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This rule, of course, is for the safety of human clients. The cat should also be able to tolerate new circumstances, characteristics not all cats possess as any cat caretaker can attest. Most other states in the USA have similar requirements for the certification of therapy cats. Specific certification facilities may have additional requirements. A declawed cat may be used for therapy, but one should never declaw a cat for therapy\u0027s sake (or any other reason, come to that).",
        "itemId": 10,
        "answers": [
            {
                "id": 329,
                "answer": "Show that barking dogs and other loud noises will not disturb them",
                "isCorrect": true
            },
            {
                "id": 330,
                "answer": "Be declawed",
                "isCorrect": false
            },
            {
                "id": 331,
                "answer": "Respond to basic commands",
                "isCorrect": false
            },
            {
                "id": 332,
                "answer": "Run through an agility course to demonstrate intelligence",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 102,
        "question": "7. Which characteristic might NOT make for a good therapy cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "In some situations, the cat does not live at a particular facility but is registered as a therapy animal by a central entity and transported from place to place with its handler (to a rehab facility, to a school, and so on). If a cat hates traveling, and resents the confines of an animal carrier, this could be a source of stress for the poor feline.",
        "itemId": 10,
        "answers": [
            {
                "id": 333,
                "answer": "Dislikes travel",
                "isCorrect": true
            },
            {
                "id": 334,
                "answer": "Laid-back personality",
                "isCorrect": false
            },
            {
                "id": 335,
                "answer": "No fear of strangers",
                "isCorrect": false
            },
            {
                "id": 336,
                "answer": "Has no interest in chasing mice",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 103,
        "question": "8. Pet owners may register their cats as therapy animals through animal shelters and similar facilities. In New York City, for example, the ASPCA works with Pet Partners, Inc. to register and train therapy cats and their handlers. What is an additional eligibility restriction that Pet Partners places on therapy cats or their handlers?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Pet Partners is based in Washington and works with many facilities around the USA to form Therapy Animal Teams. Pet Partners prohibits the registration of cats (or any other animals) that are fed raw animal protein diets. This rule was implemented in 2010 to prevent the spread of bacterial infections, especially salmonella and MRSA, to health care facilities or persons with compromised immune systems. If a handler with a cat on a raw animal protein diet wishes to register his or her cat, the handler must take the cat off such a diet for at least month. This includes pasteurized raw proteins, except for yogurt and other dairy products.\n\nHandlers must be at least 10 years of age, although if they are under 16, an adult must supervise. The cat must be at least one year old and living with the handler for at least six months. There is no restriction on a handler\u0027s tobacco or alcohol uses; a handler must simply enjoy interacting with other people and have a rapport with his or her pet.",
        "itemId": 10,
        "answers": [
            {
                "id": 337,
                "answer": "Cats must have lived with owner for at least 2 years",
                "isCorrect": false
            },
            {
                "id": 338,
                "answer": "Handlers must not drink or smoke",
                "isCorrect": false
            },
            {
                "id": 339,
                "answer": "Handlers must be at least 18 years of age",
                "isCorrect": false
            },
            {
                "id": 340,
                "answer": "Cats may not be fed a raw animal protein diet",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 104,
        "question": "9. An additional requirement for therapy cats throughout the USA is that they must be free from physical defect.",
        "isMultipleChoiceQuestion": true,
        "explanation": "A tuxedo cat named Scooter, working in a rehab hospital in Pittsburgh, was particularly suited for patients unable to walk due to stroke or injury, because the little nine-pound feline could not use his hind legs, and had to pull himself along in a custom-made cart. In 2008, a client brought a kitten to Dr. Betsy Kennon in Pennsylvania. The client had found the stray in his pet Husky\u0027s mouth! Dr. Kennon discovered that the kitten had broken its back (there was no evidence that the dog caused the fracture). Instead of euthanizing the poor creature, however, she decided to save him, and with client donations she bought Scooter a \"wheelchair\". Before long, Dr. Kennon was taking Scooter for weekly animal-assisted therapy at HealthSouth Harmarville Rehabilitation Hospital, where he would bring inspiration to amputees and other mobility-impaired patients. Scooter and Dr. Kennon made the cover of \"Reader\u0027s Digest\" in August 2010.",
        "itemId": 10,
        "answers": [
            {
                "id": 341,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 342,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 105,
        "question": "10. In the United States, the Americans with Disabilities Act (ADA) mandates that all public facilities accommodate people who are assigned a therapy cat or any other therapy animal.",
        "isMultipleChoiceQuestion": true,
        "explanation": "As a cat owner, I am as surprised as you are. In fact, the ADA makes a distinction between service animals and therapy animals. The U.S. Department of Justice (DOJ) states that the law \"defines a service animal as any guide dog, signal dog, or other animal individually trained to provide assistance to an individual with a disability.\" The DOJ has interpreted this to mean that a seeing-eye dog, for example, is a service animal. A dog or miniature horse that alerts deaf people to the doorbell is a service animal. A cat or dog that provides emotional support, however, or is used in animal-assisted therapy would not qualify according to the DOJ. This has caused serious problems for students in American universities suffering from depression, anxiety, autism and a host of other disorders, who need their therapy animals in order to successfully complete their life goals. Many people, in fact, have had to drop out of university or leave their jobs because of this change in the DOJ\u0027s implementation of the ADA, which took effect in 2011.",
        "itemId": 10,
        "answers": [
            {
                "id": 343,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 344,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 106,
        "question": "1. OK, there\u0027s this weird thing my cats do that\u0027s even somewhat of a bit hard to try and explain. I\u0027m sure anyone who has a cat or has ever had a cat most likely has experienced this one. It\u0027s that really strange expression my cats get on their face after smelling something; you know, that one where their mouth props open for so many seconds and they have this dazed sort of look about them. What is this about?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Though the \"flehmen response\" is known to most frequently occur when a cat smells urine or when male cats smell genitals or urine of a female cat in heat (as one of the answer choices sort of indicated), it still also occurs with numerous other varieties of scents as well, and is a response not only used by males but by female cats too. The following quote taken from a book I own by Karen Anderson entitled \"Why Cats Do That\" basically helps in explaining this \"flehmen response\":\n\n\"Mesmerized and intoxicated by the smell, cats hold this \"flehmen response\" position for a few seconds to allow the special fragrance to pass through and be studied and enjoyed by what\u0027s called the Jacobsen\u0027s organ. This organ, located in the roof of the cat\u0027s mouth, is a smell-taste organ about 1/2 inch long that cats use to analyze intriguing smells in and around their territories. This must be a pleasurable activity for cats for they are completely lost in thought and entirely captivated by the encounter.\"\n\nThe word \"flehmen\" is a German word and is defined as the act of a cat appearing to be sneering, with his nose screwed up and lip curled back and mouth slightly open.\nThe Jacobsen\u0027s organ, also known as the vomeronasal organ, was named after the Danish doctor who discovered it nearly 200 years ago.",
        "itemId": 11,
        "answers": [
            {
                "id": 345,
                "answer": "It\u0027s a reaction from our felines of something that smells \"foul\" or disgusting to them.",
                "isCorrect": false
            },
            {
                "id": 346,
                "answer": "There\u0027s really no known explanation for this other than cats are just a weird species and do some very odd and weird things sometimes.",
                "isCorrect": false
            },
            {
                "id": 347,
                "answer": "It\u0027s a feline reaction known as the \"flehmen response\" to an exceptionally enjoyable scent.",
                "isCorrect": true
            },
            {
                "id": 348,
                "answer": "It\u0027s an arousal response used only by male cats when smelling such scents as those left by female cats.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 107,
        "question": "2. Something else my cats do that strikes me as a bit odd is that of them \"chattering\" their teeth. This usually occurs when they\u0027re looking out a window at birds, or whatever else they may be seeing, and then all of a sudden they\u0027ll start making this chattering-like sound with their mouths. It might best be compared to the chattering noise we humans sometimes make with our teeth like when we feel cold from chilly weather outside. Why is it, though, that my cat is making this sound?",
        "isMultipleChoiceQuestion": true,
        "explanation": "During my research, I found both of these reasons to be most likely true. Cats make this chattering-like sound by opening their mouth slightly, pulling their lips back, then opening and closing their jaws very rapidly. The noise that results is a cross between what we know of as lip smacking and teeth chattering. I read that feline behaviorists believe this chattering noise to be similar to that of a cat\u0027s special \"neck bite\", also known as their \"killing bite\", because that\u0027s what cats in the wild use to kill prey quickly and efficiently before such prey ever has a chance to even put up a struggle. And thus, this also helps in making sense as to why a cat may feel excited and/or frustrated when they see prey they can\u0027t get to; because it\u0027s exciting to them to see potential prey they can inflict this bite on but then again also very frustrating for the housecat who can\u0027t actually get to it.",
        "itemId": 11,
        "answers": [
            {
                "id": 349,
                "answer": "Neither of these",
                "isCorrect": false
            },
            {
                "id": 350,
                "answer": "The chattering sound represents that of the cat\u0027s \"killing bite\" of which most likely would be inflicted on such prey if kitty could get to it.",
                "isCorrect": false
            },
            {
                "id": 351,
                "answer": "Both of these",
                "isCorrect": true
            },
            {
                "id": 352,
                "answer": "The chattering sound is a cat\u0027s way of showing his excitement and/or frustration at seeing potential prey that he\u0027s unable to get to.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 108,
        "question": "3. My cats spend a whole lot of their time just licking and grooming themselves. Is the reason for this only just because they are so extremely fastidious about keeping clean?",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"There are numerous reasons behind why cats spend so much time licking and grooming themselves. For one, it not only cleans and deodorizes kitty\u0027s coat, but also removes loose hair and skin, increases blood flow, and tones muscles. Cats sometimes may also lick their coats to regulate body temperature. In cold weather, repeated licking smooths down the fur and acts as an insulating layer. During hotter days, cats may lick their fur to feel the cooling effects of evaporation, much like how we benefit from the evaporation of sweat on our skin. And on rainy days, there\u0027s some automatic waterproofing going on for the licking stimulates glands in the skin that secrete a natural protective substance. Also, there are some cats who will groom themselves when they\u0027re feeling overly anxious or unusually nervous such as when in certain social situations.\"\nSource: \"Why Cats Do That\" by Karen Anderson.",
        "itemId": 11,
        "answers": [
            {
                "id": 353,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 354,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 109,
        "question": "4. Yes, I must admit, I do truly believe my cats are goofy creatures! Every time I go shopping and come home with paper bags, or even cardboard boxes at times, they insist on checking them out and crawling and/or climbing inside of them. What is it about these that my cats are so adamantly intrigued with?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats love to pretend that they are stalking prey, and paper bags and cardboard boxes seem to work quite well for this. They can hide behind or inside them, they can push them across the floor, and they can enthusiastically pounce on top of imaginary prey possibly trapped inside. Cats also like things that make interesting sounds for sounds add further interest to the hunting game. The crinkle of paper bags is supposedly a favorite sound among cats for it gives off a similar sound effect to that of prey moving around in or through areas such as grass, bushes, trees, etc.",
        "itemId": 11,
        "answers": [
            {
                "id": 355,
                "answer": "They\u0027re looking for and trying to find just what it is I bought and brought home for them.",
                "isCorrect": false
            },
            {
                "id": 356,
                "answer": "They\u0027re drawn to the scents of such paper and cardboard for reasons not well understood.",
                "isCorrect": false
            },
            {
                "id": 357,
                "answer": "Once again, who really knows why it is they\u0027re so intrigued for cats are just way too weird to figure out.",
                "isCorrect": false
            },
            {
                "id": 358,
                "answer": "They view them as toys that they can use for hunting practice.",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 110,
        "question": "5. Why is it that my cats insist upon bringing me their dead prey, or what might also be known or referred to as bringing me \"presents\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "I read that our felines normally see us (their owners) as parent figures, but when they bring dead prey or \"presents\" to us, they are then perceiving us as their kittens who need to learn and be introduced to the concepts of hunting. I also read that it\u0027s a way of our cats saying they love us and feel a sense of belonging and attachment to us; therefore, displaying this love and attachment by introducing us to a side of the feline world, which would be that of the feline hunt instinct.",
        "itemId": 11,
        "answers": [
            {
                "id": 359,
                "answer": "My cat is proudly trying to scare me to death with his newfound gift for me.",
                "isCorrect": false
            },
            {
                "id": 360,
                "answer": "All of these",
                "isCorrect": false
            },
            {
                "id": 361,
                "answer": "My cat is trying to show me that if he had to, he\u0027d be able to survive in the wild.",
                "isCorrect": false
            },
            {
                "id": 362,
                "answer": "My cat sees me as its kitten figure and is trying to introduce me to the concept of hunting.",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 111,
        "question": "6. This next behavior I have experienced with only one of my cats. She\u0027s a real sweetheart, but when she\u0027s being petted or loved on, she\u0027ll start licking on your arm, leg, hand, or wherever, which can be really scary sometimes because she\u0027ll then bite and grab ahold of your skin for a few seconds, which usually hurts, and then let go. She\u0027ll continue this repeated action of the licking and biting sequence over and over again until she\u0027s no longer being petted or loved on. It doesn\u0027t appear as if she means to be aggressive especially since she\u0027s not really sinking her teeth into the skin but rather just holding them there for a few seconds. But nonetheless, is this behavior most likely still attributed to aggression?",
        "isMultipleChoiceQuestion": true,
        "explanation": "While researching this, I found it\u0027s a behavior some cats exhibit when feeling happy and extremely affectionate toward their owners. The bite is attributed as being the feline equivalent to that of a human kiss...ahh! It\u0027s where the cat gently takes a piece of human skin between their teeth and holds on to it for just a few seconds. It does make me feel pretty special to know my cat is giving me a feline form of a kiss; however, it can sometimes nevertheless still really hurt depending on just what part of the body it is she\u0027s attempting to kiss!",
        "itemId": 11,
        "answers": [
            {
                "id": 363,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 364,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 112,
        "question": "7. I thought I was the only cat owner in the entire world with a cat who does this next behavior, but I found out that I am indeed not alone. One of my male cats, who is now 11 years old, has had an obsession with licking anything that\u0027s plastic, from trash bags to the plastic wrapping on toilet paper packages, for as long as I can remember. I just always figured that I had a most abnormal and strange cat. Which of these is a theory as to why some cats like licking plastic?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Though these theories and beliefs exist, and the licking of plastic seems to be a common activity amongst some felines, it\u0027s still something of uncertain explanation. Other possible explanations include the theory that the plastic bags emanate an odor resembling fish or animal fat due to an ingredient in their manufacture, or that the cat is lacking something in its diet.",
        "itemId": 11,
        "answers": [
            {
                "id": 365,
                "answer": "Licking plastic relieves anxiety",
                "isCorrect": true
            },
            {
                "id": 366,
                "answer": "Licking plastic keeps their tongue clean",
                "isCorrect": false
            },
            {
                "id": 367,
                "answer": "It reminds them of their time in the mother\u0027s womb",
                "isCorrect": false
            },
            {
                "id": 368,
                "answer": "They are pretending they\u0027ve caught a plastic mouse",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 113,
        "question": "8. Another strange behavior exhibited by my 11 year old male is that of him scratching his paws on glass windows in a digging-like sort of motion. He usually only does this when I\u0027m outdoors and he can see me through our sliding glass door. He\u0027s an indoor-only cat and seems to be quite frustrated when he does this. He\u0027s also a bit vocal during his persistent scratching of the glass. Which of the following would be the most logical reasoning behind why my cat and other cats alike do this?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Another reason behind why cats may do this is they may see or hear things that interest them and that they\u0027d like to explore such as other cats, animals, potential prey, people, or even moving or stationary objects for that matter, to where the scratching ritual has become the cat\u0027s way of expressing such frustration of not being able to get beyond the glass. And thus, this is the reason why I personally believe my cat does this. Since he only exhibits this behavior when I\u0027m outdoors and in his view, I believe he becomes frustrated that he can\u0027t get through the glass barrier in order to be with me.",
        "itemId": 11,
        "answers": [
            {
                "id": 369,
                "answer": "None of these",
                "isCorrect": false
            },
            {
                "id": 370,
                "answer": "It\u0027s most likely that the cat is so truly naive that he thinks he\u0027s going to actually be able to scratch his way through the glass barrier.",
                "isCorrect": false
            },
            {
                "id": 371,
                "answer": "It\u0027s most likely a cat\u0027s way of testing and/or verifying that there is actually a barrier between him and what he sees beyond the glass.",
                "isCorrect": true
            },
            {
                "id": 372,
                "answer": "It\u0027s most likely a cat\u0027s way of showing his dislike for being trapped indoors and therefore has decided to be destructive in tearing down the barrier that keeps him there.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 114,
        "question": "9. Something I\u0027ve always been a bit curious about where cats are concerned is the reasoning behind why it is they like to use litter boxes and/or like to bury their waste. From the following, which statement might best explain this?",
        "isMultipleChoiceQuestion": true,
        "explanation": "During my research of this topic, I found all these reasons to be true. Cats are fastidious by nature, meaning they\u0027re very clean creatures, but that\u0027s only a part of why they like to bury their waste. I found that dominant cats in the wild will actually NOT bury their waste as a means to display their dominance, and that only those cats classified as \"secondary cats\" are the ones who bury their waste in an effort to protect their trail from predators. In the world of housecats, it\u0027s believed that our felines perceive us (their owners) as the dominant animal, therefore, they will bury their waste as to not offend us. However, this just may not hold true for all housecats for I, myself, have four cats and have one who doesn\u0027t bury his waste at all! I suppose it\u0027s probably because he\u0027s showing dominance over the other three cats, but then again, based on my research I thought I was supposed to be perceived as the dominant animal? Hmmm..., not so true with my cat for he\u0027s obviously not too worried about whether he\u0027s offending me or not with his waste! So then, based on that, I must say I\u0027m not really sure that I totally agree with all the information I found regarding this topic.",
        "itemId": 11,
        "answers": [
            {
                "id": 373,
                "answer": "Cats are fastidious.",
                "isCorrect": false
            },
            {
                "id": 374,
                "answer": "All of these",
                "isCorrect": true
            },
            {
                "id": 375,
                "answer": "It\u0027s an effort of the cat as to not offend.",
                "isCorrect": false
            },
            {
                "id": 376,
                "answer": "When in the wild, it\u0027s a way for cats to protect their trail from predators.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 115,
        "question": "10. One thing I\u0027ve always wondered about is why most cats seem to go crazy over catnip. My cats do all sorts of crazy things such as rolling their entire bodies all around in it, sprint dashing, and performing leaps through the air; however, the effects of the catnip never seem to really last for all that long before my cats are then fast asleep in a dazed, daydreamy-like sort of state. What is it about catnip that causes such happenings?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Catnip is a natural herb plant that has a substance contained in its leaves and stems called nepetalactone that is the source of why cats experience such moments of pure ecstasy. It is completely safe for cats and has been tested to have absolutely no harmful or addictive effects on them, just enjoyable moments of feeling free and elated. Not all cats, however, may be as delighted with catnip as the next. I read that the genetic makeup of a cat determines just how receptive they may be to it or not, and that kittens who are 3 months or less show no interest in it at all. Plus, I read that kittens who are introduced to catnip prior to 3 months old will not even respond to it at all when they are older. I found and thought this information bit on catnip to be quite interesting.",
        "itemId": 11,
        "answers": [
            {
                "id": 377,
                "answer": "Catnip has addictive drug-like substances in it that cause cats to have moments of pleasurable behaviors.",
                "isCorrect": false
            },
            {
                "id": 378,
                "answer": "None of these",
                "isCorrect": true
            },
            {
                "id": 379,
                "answer": "Catnip is an aphrodisiac.",
                "isCorrect": false
            },
            {
                "id": 380,
                "answer": "Both of these",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 116,
        "question": "11. OK, I\u0027ve already admitted I believe my cats are goofy creatures, but could they be completely insane as well? When my cats do this next thing, I\u0027m left wondering if they just might be. It\u0027s when all of a sudden, out of the blue, my cat takes off at full speed in a mad dash back and forth throughout the house in what I perceive as some sort of manic attack! One of my cats even makes growling sounds as he\u0027s dashing around in his crazed, insane-like state. Others who have witnessed any of my cats doing this have asked me ever so seriously what is wrong with my cat and if he\u0027s all right or not. So, what is wrong with them and why is it they do this?",
        "isMultipleChoiceQuestion": true,
        "explanation": "All the information I found on this topic basically states the same thing, that cats exhibit this behavior due to pent-up energy that has suddenly overflowed. Also, the info I found talks about how as natural-born hunters, cats are naturally built for short bursts of speed and even when cats are in environments where there\u0027s nothing to hunt or no need to hunt, they still nonetheless feel the need to hunt anyway.",
        "itemId": 11,
        "answers": [
            {
                "id": 381,
                "answer": "It\u0027s a cat\u0027s way of releasing built-up anger toward its owner.",
                "isCorrect": false
            },
            {
                "id": 382,
                "answer": "Cats who do this are indeed truly insane and/or possessed.",
                "isCorrect": false
            },
            {
                "id": 383,
                "answer": "It\u0027s a cat\u0027s way of releasing pent-up energy.",
                "isCorrect": true
            },
            {
                "id": 384,
                "answer": "It\u0027s a cat\u0027s way of releasing pent-up sexual frustrations.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 117,
        "question": "12. Something my cats do all the time is to rub their head against me, usually my leg. Why is it exactly that they and other cats rub their heads against their owners like this?",
        "isMultipleChoiceQuestion": true,
        "explanation": "When our felines rub against us with their heads, they are marking us with their scent glands to signal to other cats that we belong to them. When cats do this, they are usually in a contented, loving mood and are therefore displaying their love and affection for us as well. Some owners may find their cats do this most often after they have returned home from somewhere. It\u0027s believed that cats who rub against their owners during these particular times are perhaps trying to cover up the scents of where their owner has been with their own scent, in which signifying yet once again their \"claim\" on the owner. And so, even though they\u0027re staking their claim on us, it\u0027s a behavior all owners should feel proud and honored to receive, for all in all it\u0027s a sign our cats love us and want to keep us.",
        "itemId": 11,
        "answers": [
            {
                "id": 385,
                "answer": "They are depositing their scents on us.",
                "isCorrect": false
            },
            {
                "id": 386,
                "answer": "All of these",
                "isCorrect": true
            },
            {
                "id": 387,
                "answer": "They are showing us just how much they love us.",
                "isCorrect": false
            },
            {
                "id": 388,
                "answer": "They do this to exhibit their claims on us as \"theirs\".",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 118,
        "question": "13. My cats must hate it when I\u0027m talking on the telephone, because just about every time I do, along will come at least one of them demanding I give them some sort of attention. What is it about me being on the phone that causes my cat(s) to act this way?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This is a pretty obvious behavior if one really thinks about it. My cat hears me talking but yet sees no one else around, and so is of course most likely going to assume I must be talking to him. Therefore, his demand for attention is only due to what he perceives as my conversation with him.",
        "itemId": 11,
        "answers": [
            {
                "id": 389,
                "answer": "My cat is annoyed that I\u0027m talking to someone else and not paying any attention to him.",
                "isCorrect": false
            },
            {
                "id": 390,
                "answer": "My cat is curious as to the sound he hears coming from the phone.",
                "isCorrect": false
            },
            {
                "id": 391,
                "answer": "My cat is basically just a spoiled brat who likes to drive me crazy while I\u0027m on the phone.",
                "isCorrect": false
            },
            {
                "id": 392,
                "answer": "My cat is responding to what he perceives as my conversation with him.",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 119,
        "question": "14. I\u0027m sure most everyone who has ever owned a cat, or even those who haven\u0027t, are familiar with the fact that cats are very curious creatures. One probably has even heard the saying, \"Curiosity killed the cat.\" So, why is it exactly that cats are so darn curious all the time?",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"They\u0027re hunters, so their natural instinct is to be constantly on the prowl for food. This explains why they\u0027re always investigating--they\u0027re ostensibly looking for something to eat. (Well, maybe not literally, but that\u0027s the instinct that generally drives the behavior.)\"\nSource: http://allcatz.tripod.com/sub/CatPsych.htm",
        "itemId": 11,
        "answers": [
            {
                "id": 393,
                "answer": "None of these",
                "isCorrect": false
            },
            {
                "id": 394,
                "answer": "Cats use curiosity as a means to get attention.",
                "isCorrect": false
            },
            {
                "id": 395,
                "answer": "Cats are curious by nature due to their natural hunt instinct.",
                "isCorrect": true
            },
            {
                "id": 396,
                "answer": "A cat\u0027s curiosity is derived from a mischievous compulsion.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 120,
        "question": "15. Have you ever owned or seen a cat who will roll over onto his/her back and completely expose his/her stomach? This is something all my cats do, but I have one who not only does this more so than the others, but he even sleeps that way for hours and hours as well. Could this exposing of the stomach be attributed as a sign from my cat that he feels completely secure and safe with me?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats who do this are indeed showing their complete trust in us that we won\u0027t ever hurt them. A cat\u0027s stomach area is considered their most vulnerable body part, and when they freely expose it to us, they\u0027re giving a sign that they feel completely secure and safe enough to trust us with such. And, while exposing their stomach, some cats may even feel secure enough to let you pet them there or even play with them in that position. For those like my cat who will sleep this way, I read that their trust in us is in the stratosphere. In other words, their trust in their environment is derived from their trust in us.",
        "itemId": 11,
        "answers": [
            {
                "id": 397,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 398,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 121,
        "question": "1. My cat won\u0027t use the litter box because he/she is rebellious and wants to make me mad.",
        "isMultipleChoiceQuestion": true,
        "explanation": "This is a very common misunderstood problem with cats. There are numerous reasons why cats eliminate outside of the litter box. One could be your cat giving a sign that something may be medically wrong. Other reasons include: 1)A marking of territory (mostly common in unaltered cats). 2)The litter box isn\u0027t clean enough (contrary to many beliefs, cats are very clean creatures). 3)Maybe the cat doesn\u0027t like the litter-type you have or the cat may prefer a box with or without a hood. Other common reasons (I learned these with my own cats), are maybe you don\u0027t have enough litter boxes provided or the cat doesn\u0027t like the location of the box. Try moving the box somewhere else. I learned it\u0027s a good idea to provide as many litter boxes as you have cats. For example: 2 cats\u003d2 boxes, 4 cats\u003d4 boxes, etc. It can take a lot of time and patience to figure out why a cat isn\u0027t using the litter box. Mostly though, it takes a lot of love and understanding of the feline world and of their nature.",
        "itemId": 12,
        "answers": [
            {
                "id": 399,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 400,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 122,
        "question": "2. My cat scratches the furniture to:",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats scratch for all of these reasons. Their paw pads have a gland that leaves a scent whenever they scratch a surface; therefore, they sometimes scratch to mark territory. This is most common in outdoor cats and big cats in the wild. They also scratch to help loosen and remove dead nail sheaths. For stretching, you might notice sometimes when your cat wakes up from a nap that one of the first things they do is scratch their scratching post (if one is provided, if not, it just may be your furniture). So, scratching is also known as a means for cats to stretch their muscles.",
        "itemId": 12,
        "answers": [
            {
                "id": 401,
                "answer": "shed nail sheaths",
                "isCorrect": false
            },
            {
                "id": 402,
                "answer": "mark territory",
                "isCorrect": false
            },
            {
                "id": 403,
                "answer": "all of these",
                "isCorrect": true
            },
            {
                "id": 404,
                "answer": "stretch muscles",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 123,
        "question": "3. What is one explanation for why my cat \"kneads\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "\"Kneading\" has been linked as a sign of affection because it\u0027s thought that the cat is portraying signs of wellness as they did in kittenhood with their mothers. As kittens, they knead on their mothers to increase the milk flow, and so when they continue kneading into adulthood it\u0027s believed to be a way of showing they feel loved and cared for.",
        "itemId": 12,
        "answers": [
            {
                "id": 405,
                "answer": "a sign of well-being or contentment",
                "isCorrect": true
            },
            {
                "id": 406,
                "answer": "a sign of feeling sad",
                "isCorrect": false
            },
            {
                "id": 407,
                "answer": "a sign of aggressiveness",
                "isCorrect": false
            },
            {
                "id": 408,
                "answer": "a sign of fear",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 124,
        "question": "4. My cat leaves objects such as his/her toys in his/her food or water bowls just to drive me crazy.",
        "isMultipleChoiceQuestion": true,
        "explanation": "I read about this in \"Cat Fancy\" magazine. From what I recall, female cats are known to do this more than males. It\u0027s a hunting trait of the female that\u0027s supposed to represent them bringing food back to their young when they\u0027re in the wild. With our cats being mostly domesticated now, they exhibit this hunting behavior with objects such as their toys to represent a kill that has been taken to a safe spot for their young to eat.",
        "itemId": 12,
        "answers": [
            {
                "id": 409,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 410,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 125,
        "question": "5. Why does my cat suddenly bite me in an aggressive manner when I\u0027m petting him/her?",
        "isMultipleChoiceQuestion": true,
        "explanation": "From what I\u0027ve researched, this behavior is still something that\u0027s not well understood. Biting when petted varies with cats. Some cats like you to pet them to your heart\u0027s content and others don\u0027t like it at all. I also recall reading about this years ago in \"Cat Fancy\" magazine that it can be attributed to an arousal reaction. This seems to be especially true for many cats who don\u0027t like their bellies rubbed. Whatever the real reasoning is behind this behavior, it\u0027s known that it\u0027s definitely a sign from your cat that the petting is no longer a pleasant feeling for them.",
        "itemId": 12,
        "answers": [
            {
                "id": 411,
                "answer": "none of these",
                "isCorrect": false
            },
            {
                "id": 412,
                "answer": "my cat is mean",
                "isCorrect": false
            },
            {
                "id": 413,
                "answer": "my cat doesn\u0027t want to be petted anymore",
                "isCorrect": true
            },
            {
                "id": 414,
                "answer": "my cat doesn\u0027t like affection",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 126,
        "question": "6. My cat purrs only when he/she is happy and relaxed.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Although cats do purr when they\u0027re feeling happy and relaxed, some cats have also been known to purr even when they\u0027re feeling ill, in pain, or anxious. The theory for this is it\u0027s supposedly a form of self-comforting vocalization which can provide for faster healing.",
        "itemId": 12,
        "answers": [
            {
                "id": 415,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 416,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 127,
        "question": "7. Is it normal for my cat to exhibit body movements during sleep?",
        "isMultipleChoiceQuestion": true,
        "explanation": "It\u0027s normal as long as your cat doesn\u0027t exhibit the same type of movements while awake. For example, if your cat was having a seizure during sleep, they most likely would have them when awake too. My cats do things such as their whiskers moving, leg twitching and teeth chattering while they\u0027re sleeping. My vet told me this is all normal, but if you at all suspect your cats\u0027 movements don\u0027t seem normal while he/she is sleeping, you should definitely consult your veterinarian.",
        "itemId": 12,
        "answers": [
            {
                "id": 417,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 418,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 128,
        "question": "8. Why does my cat insist on playing and ransacking the house after I have gone to bed?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats are nocturnal and it\u0027s perfectly normal for them to want to play and carry on with activities at night while us humans are trying to sleep. It is sometimes possible to change this nighttime behavior if it is really bothersome for you. To try and change it, it has been suggested to schedule specific play times with your cat, especially one conducted in the evening hours approximately 1 hour before you go to bed. Remember, though, this doesn\u0027t always work with all cats.",
        "itemId": 12,
        "answers": [
            {
                "id": 419,
                "answer": "my cat wants me to get up",
                "isCorrect": false
            },
            {
                "id": 420,
                "answer": "my cat is a nocturnal creature",
                "isCorrect": true
            },
            {
                "id": 421,
                "answer": "my cat likes to annoy me",
                "isCorrect": false
            },
            {
                "id": 422,
                "answer": "none of these",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 129,
        "question": "9. Why does my cat scratch the floor around his/her food and water bowls after eating as if to cover it up?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Some cats have a natural instinct to hide their food and cover up the scent of it to keep predators from finding it. So, this is another normal behavior some cats get from their wild roots. It is strange to see a cat do this, though, because it looks as if they\u0027re using the litter box.",
        "itemId": 12,
        "answers": [
            {
                "id": 423,
                "answer": "none of these",
                "isCorrect": false
            },
            {
                "id": 424,
                "answer": "it smells bad",
                "isCorrect": false
            },
            {
                "id": 425,
                "answer": "to hide it",
                "isCorrect": true
            },
            {
                "id": 426,
                "answer": "doesn\u0027t like its location",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 130,
        "question": "10. Why does my indoor cat attack me or my other indoor cat(s) when he/she sees an unknown cat outdoors?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This is known as displaced aggression. The cat can\u0027t get to the cat outdoors, so he/she turns their aggression on whatever may be the closest person, animal, or thing to them. Just one last thought on cats and their behaviors; before we get mad or give up on them, we should take a moment to remember where they came from. Cats do a lot of strange things we humans don\u0027t always understand and even sometimes think they should be punished for, but to the cat they don\u0027t know they\u0027ve done anything wrong. Just remember it usually has something more to do with their nature than with making us mad.",
        "itemId": 12,
        "answers": [
            {
                "id": 427,
                "answer": "my cat is most likely showing he/she is in control",
                "isCorrect": false
            },
            {
                "id": 428,
                "answer": "my cat is most likely showing displaced fear",
                "isCorrect": false
            },
            {
                "id": 429,
                "answer": "my cat thinks of me or my other cat(s) as prey",
                "isCorrect": false
            },
            {
                "id": 430,
                "answer": "my cat is most likely showing displaced aggression",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 131,
        "question": "1. Cats are meat eaters. However, which type of meat is not recommended to feed them, because of the high amounts of sodium they contain?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats can be fed meats like chicken breast, fish, turkey and hamburgers in small quantities, but cold cuts and fatty stuff like turkey skin are not recommended. They contain a lot of sodium and fats that can cause stomach problems.",
        "itemId": 13,
        "answers": [
            {
                "id": 431,
                "answer": "Cold cuts",
                "isCorrect": true
            },
            {
                "id": 432,
                "answer": "Hamburger meat",
                "isCorrect": false
            },
            {
                "id": 433,
                "answer": "Chicken breasts",
                "isCorrect": false
            },
            {
                "id": 434,
                "answer": "Fish",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 132,
        "question": "2. There is a popular myth that cats like milk. Do all cats tolerate milk?",
        "isMultipleChoiceQuestion": true,
        "explanation": "While some cats are perfectly fine drinking milk, some others can suffer diarrhea from drinking it. Most cats are not capable of producing an enzyme called lactase, which is in charge of properly digesting milk. Because of this, it is best to give your cat water.",
        "itemId": 13,
        "answers": [
            {
                "id": 435,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 436,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 133,
        "question": "3. There shouldn\u0027t be too much trouble if a cat eats some melon or cantaloupe. However, which part of the melon should your cat NOT eat?",
        "isMultipleChoiceQuestion": false,
        "explanation": "Melons or cantaloupes in little amounts shouldn\u0027t harm a cat, but due to the high amounts of sugar and calories they contain, they must eat it moderately. Seeds could cause bowel obstructions in your cat, so it is important that your cat doesn\u0027t eat the seeds.",
        "itemId": 13,
        "answers": [
            {
                "id": 461,
                "answer": "Seeds",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 134,
        "question": "4. Because it contains oxidizing agents that can damage a cat\u0027s blood cells, which condiment should be avoided by cats?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Garlic, as well as onions, are not good for a cat\u0027s blood cells. Although your cat most probably won\u0027t die from eating garlic or onions, it is better if these are avoided.",
        "itemId": 13,
        "answers": [
            {
                "id": 437,
                "answer": "Thyme",
                "isCorrect": false
            },
            {
                "id": 438,
                "answer": "Garlic",
                "isCorrect": true
            },
            {
                "id": 439,
                "answer": "Salt",
                "isCorrect": false
            },
            {
                "id": 440,
                "answer": "Pepper",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 135,
        "question": "5. Which of these fruits should never be eaten by cats because of the harm they could cause to their kidneys?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Grapes could cause severe kidney failure should they be ingested by cats or dogs, although the substance in the grapes that causes the damage has not been found. It\u0027s better to keep your cat away from grapes, sultanas and raisins.",
        "itemId": 13,
        "answers": [
            {
                "id": 441,
                "answer": "Apples",
                "isCorrect": false
            },
            {
                "id": 442,
                "answer": "Grapes",
                "isCorrect": true
            },
            {
                "id": 443,
                "answer": "Bananas",
                "isCorrect": false
            },
            {
                "id": 444,
                "answer": "Oranges",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 136,
        "question": "6. Which of these plants, mainly used to make salad, do cats like and is relatively safe for them?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Lettuce in small quantities should not harm cats. However, spinach and Swiss chard are high in oxalic acid which may help the development of kidney and bladder stones. That is why cats shouldn\u0027t eat either spinach or Swiss chard.",
        "itemId": 13,
        "answers": [
            {
                "id": 445,
                "answer": "Lettuce",
                "isCorrect": true
            },
            {
                "id": 446,
                "answer": "Swiss chard",
                "isCorrect": false
            },
            {
                "id": 447,
                "answer": "Spinach",
                "isCorrect": false
            },
            {
                "id": 448,
                "answer": "Poison ivy",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 137,
        "question": "7. Which frozen treat, often served in a cone, is not harmful for cats in small quantities?",
        "isMultipleChoiceQuestion": false,
        "explanation": "Although ice cream contains milk, most cats are not harmed by eating small amounts of ice cream.",
        "itemId": 13,
        "answers": [
            {
                "id": 462,
                "answer": "Ice cream",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 138,
        "question": "8. Which of these foods should you NEVER give your cat? (Hint: you should never give it to dogs either)",
        "isMultipleChoiceQuestion": true,
        "explanation": "Chocolate contains stimulants that are potentially toxic to cats and dogs. Their system can not tolerate chocolate.",
        "itemId": 13,
        "answers": [
            {
                "id": 449,
                "answer": "Bananas",
                "isCorrect": false
            },
            {
                "id": 450,
                "answer": "Marshmallows",
                "isCorrect": false
            },
            {
                "id": 451,
                "answer": "Apples",
                "isCorrect": false
            },
            {
                "id": 452,
                "answer": "Chocolate",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 139,
        "question": "9. Which of the following products is relatively safe for a cat to eat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "French fries are not likely to cause a negative effect on a cat\u0027s body, but certainly it should not be the main component of their diet. Raw eggs should never be eaten by cats as they could contain a number of infections. Grapes (and raisins) could cause kidney failure.",
        "itemId": 13,
        "answers": [
            {
                "id": 453,
                "answer": "Grapes",
                "isCorrect": false
            },
            {
                "id": 454,
                "answer": "French fries",
                "isCorrect": true
            },
            {
                "id": 455,
                "answer": "Candy",
                "isCorrect": false
            },
            {
                "id": 456,
                "answer": "Raw eggs",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 140,
        "question": "10. Cats love fish. However, some types of fish, such as tuna, can contain high levels of which dangerous chemical element?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Even though cats can eat tuna, halibut, cod and many other types of fish, it can also be dangerous for them as some of the fish, especially canned tuna, can contain high levels of mercury which can be harmful for your cat.\n\nCats like fish and there should be no risk in giving them fish, although their diet cannot be solely based on fish.",
        "itemId": 13,
        "answers": [
            {
                "id": 457,
                "answer": "Mercury",
                "isCorrect": true
            },
            {
                "id": 458,
                "answer": "Krypton",
                "isCorrect": false
            },
            {
                "id": 459,
                "answer": "Polonium",
                "isCorrect": false
            },
            {
                "id": 460,
                "answer": "Plutonium",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 141,
        "question": "1. As dogs get older, their metabolism changes and their need for calories decreases. This is also true for cats.",
        "isMultipleChoiceQuestion": true,
        "explanation": "As a cat ages, its metabolism slows down. If the older cat eats too much at once it will not be able to properly work off the calories and will gain weight.",
        "itemId": 14,
        "answers": [
            {
                "id": 463,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 464,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 142,
        "question": "2. Dry skin can be a problem for older cats. Brushing your cat can help spread natural oils through the coat by stimulating which gland?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Older cats need to be groomed more often. It\u0027s a wonderful way to spend time with your cat and helps to prevent hairballs!",
        "itemId": 14,
        "answers": [
            {
                "id": 465,
                "answer": "pituitary gland",
                "isCorrect": false
            },
            {
                "id": 466,
                "answer": "mammary gland",
                "isCorrect": false
            },
            {
                "id": 467,
                "answer": "thyroid gland",
                "isCorrect": false
            },
            {
                "id": 468,
                "answer": "sebaceous gland",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 143,
        "question": "3. The movement of food through a cat\u0027s digestive tract slows with age, therefore constipation is very common in older cats. Which of the following is NOT a contributing factor to this condition?",
        "isMultipleChoiceQuestion": true,
        "itemId": 14,
        "answers": [
            {
                "id": 469,
                "answer": "anal gland disease",
                "isCorrect": false
            },
            {
                "id": 470,
                "answer": "inactivity",
                "isCorrect": false
            },
            {
                "id": 471,
                "answer": "moist bulky foods",
                "isCorrect": true
            },
            {
                "id": 472,
                "answer": "not drinking enough water",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 144,
        "question": "4. As a cat\u0027s heart ages, it can not pump as much blood in a given amount of time. Cats can develop a disease of the heart muscle called ______.",
        "isMultipleChoiceQuestion": true,
        "explanation": "X-rays, an EKG, and an echocardiogram can be used to diagnose heart disease and various medications are available, depending upon the type and severity of the disease.",
        "itemId": 14,
        "answers": [
            {
                "id": 473,
                "answer": "cardiomewpathy",
                "isCorrect": false
            },
            {
                "id": 474,
                "answer": "cardiomyopathy",
                "isCorrect": true
            },
            {
                "id": 475,
                "answer": "cardiodynia",
                "isCorrect": false
            },
            {
                "id": 476,
                "answer": "cardiomegaly",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 145,
        "question": "5. Owners of older cats may notice an increase in water consumption and urination. These are frequently signs of kidney disease. Generally, these signs don\u0027t occur until what percentage of the kidney function is lost?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Kidney function can be measured through tests on the blood and a urinalysis.",
        "itemId": 14,
        "answers": [
            {
                "id": 477,
                "answer": "50 percent",
                "isCorrect": false
            },
            {
                "id": 478,
                "answer": "70 percent",
                "isCorrect": true
            },
            {
                "id": 479,
                "answer": "40 percent",
                "isCorrect": false
            },
            {
                "id": 480,
                "answer": "60 percent",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 146,
        "question": "6. Older cats may experience hearing loss. This is often severe before the owner is aware of the problem. To prevent your cat from being startled, how can you let him, or her know you are approaching?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Even with hearing loss, cats can still sense vibrations, so clapping your hands or stomping your feet may alert your cat to your presence!",
        "itemId": 14,
        "answers": [
            {
                "id": 481,
                "answer": "turn a light on and off rapidly before entering a room",
                "isCorrect": false
            },
            {
                "id": 482,
                "answer": "stomp your feet on the floor",
                "isCorrect": false
            },
            {
                "id": 483,
                "answer": "clap your hands",
                "isCorrect": false
            },
            {
                "id": 484,
                "answer": "all of these",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 147,
        "question": "7. Older cats may have difficulty going up and down stairs, or jumping onto their favorite perches. This decreased mobility due to stiffness of the joints is known as ______.",
        "isMultipleChoiceQuestion": false,
        "explanation": "As in people, arthritis in cats may cause slight stiffness, or become debilitating. But, do NOT give your cat an anti-inflammatory or pain relief medication unless your veterinarian prescribes one!",
        "itemId": 14,
        "answers": [
            {
                "id": 495,
                "answer": "arthritis",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 148,
        "question": "8. Which of the following is NOT a behavioral change in older cats due to stress?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Older cats do not handle stress well...and they let you know it!",
        "itemId": 14,
        "answers": [
            {
                "id": 485,
                "answer": "aggression",
                "isCorrect": false
            },
            {
                "id": 486,
                "answer": "inappropriate elimination",
                "isCorrect": false
            },
            {
                "id": 487,
                "answer": "noise phobias",
                "isCorrect": false
            },
            {
                "id": 488,
                "answer": "decreased vocalization",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 149,
        "question": "9. As cats age, their ability to regulate their body temperature stays the same.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Older cats are less adaptable to changes in temperature.",
        "itemId": 14,
        "answers": [
            {
                "id": 489,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 490,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 150,
        "question": "10. Unspayed female cats may have some hardening of the mammary glands as they age, or they may develop cancer. Approximately what percentage of mammary tumors in cats are malignant?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Dedicated to all cats, with love - thanks for sharing your lives with us!",
        "itemId": 14,
        "answers": [
            {
                "id": 491,
                "answer": "70 percent",
                "isCorrect": false
            },
            {
                "id": 492,
                "answer": "50 percent",
                "isCorrect": false
            },
            {
                "id": 493,
                "answer": "85 percent",
                "isCorrect": true
            },
            {
                "id": 494,
                "answer": "65 percent",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 151,
        "question": "1. The color effect produced by individual hairs with contrasting light and dark banding along each hair shaft is called which?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Ticked hair is also known as agouti, and is found in many wild felines. Domestic breeds which must have ticked coats are Abyssinians, Somalis, and Singapuras.",
        "itemId": 15,
        "answers": [
            {
                "id": 496,
                "answer": "shaded",
                "isCorrect": false
            },
            {
                "id": 497,
                "answer": "ticked",
                "isCorrect": true
            },
            {
                "id": 498,
                "answer": "striped",
                "isCorrect": false
            },
            {
                "id": 499,
                "answer": "cameo",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 152,
        "question": "2. Tabby is the name given to a striped coat. Several types of tabby pattern occur both in domestic cats and in their wild relatives. What tabby pattern is most frequently seen in wild species of cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Classic tabby sounds as if it should be the original pattern, but is more commonly found in domestic cats. Blotched tabby is a synonym for classic. In some patterns, the stripes are shorter and break up into the spotted type of tabby.",
        "itemId": 15,
        "answers": [
            {
                "id": 500,
                "answer": "Classic",
                "isCorrect": false
            },
            {
                "id": 501,
                "answer": "Mackerel (narrow stripes)",
                "isCorrect": true
            },
            {
                "id": 502,
                "answer": "Blotched",
                "isCorrect": false
            },
            {
                "id": 503,
                "answer": "Spotted",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 153,
        "question": "3. I have a calico cat whose coat is attractively patterned with auburn and black patches. Which is most likely to be true?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Both red and black colors are located on the X chromosome, so female cats (XX) can easily have one of each. The occasional male calico is probably an example of Klinefelter\u0027s syndrome, a genetic anomaly in which the kitten has an extra sex chromosome (XXY). Red coat color is usually found in male cats, although females occur, particularly in genetically-selected breeds. This pattern occurs in pedigreed and generic cats alike.\nThis question honors Diana, the ravishing daughter of a black-and-white father and red-and-white mother. She has a noble pedigree, and is a Turkish Van.",
        "itemId": 15,
        "answers": [
            {
                "id": 504,
                "answer": "The cat is a Persian.",
                "isCorrect": false
            },
            {
                "id": 505,
                "answer": "The cat is most likely the offspring of a red mother and a black father.",
                "isCorrect": false
            },
            {
                "id": 506,
                "answer": "The cat is probably female.",
                "isCorrect": true
            },
            {
                "id": 507,
                "answer": "The cat is pedigreed.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 154,
        "question": "4. These cat breeds have only one recognized color, with one exception. Which?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Bombay cats are black, Chartreux blue, Havanas a rich solid brown. Turkish Angoras are most often white, but cats in a wide range of colors may be registered in Turkey, US and the UK.",
        "itemId": 15,
        "answers": [
            {
                "id": 508,
                "answer": "Bombay",
                "isCorrect": false
            },
            {
                "id": 509,
                "answer": "Havana",
                "isCorrect": false
            },
            {
                "id": 510,
                "answer": "Chartreux",
                "isCorrect": false
            },
            {
                "id": 511,
                "answer": "Turkish Angora",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 155,
        "question": "5. The Peke-faced Persian cat has an extremely flattened face and a tiny nose actually depressed between the eyes. It was selectively bred from unusually short-faced Persians. Although Persian cats may have any colored coat, Peke-faces have only a limited number of acceptable colors.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Peke-faced Persian cats are all solid red or red tabby. Because of the extreme compression of the face, they are susceptible to tear duct and nasal problems. If a Peke-face looks as if he had the world\u0027s worst sinus headache, this could be the reason!",
        "itemId": 15,
        "answers": [
            {
                "id": 512,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 513,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 156,
        "question": "6. The Sphynx cat is known for its long, luxurious, fur.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Except for occasional fine down, Sphynxes are hairless. Tabby, tortoiseshell, tuxedo, van, and Siamese patterns can all occur on the cat\u0027s skin.",
        "itemId": 15,
        "answers": [
            {
                "id": 514,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 515,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 157,
        "question": "7. A white cat with colored patches on the ears and tail is said to have what type of coat pattern?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Named after the distinctive Turkish Van breed. Van patterns can be found with red and/or black patches or even tortie patches. Tuxedo cats have larger areas of black and white, with white chests. Siamese are the best-known \"pointed\" breed; their bodies are lighter with more intense coloring on the extremities.",
        "itemId": 15,
        "answers": [
            {
                "id": 516,
                "answer": "van",
                "isCorrect": true
            },
            {
                "id": 517,
                "answer": "tortie-and-white",
                "isCorrect": false
            },
            {
                "id": 518,
                "answer": "Siamese",
                "isCorrect": false
            },
            {
                "id": 519,
                "answer": "tuxedo",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 158,
        "question": "8. A coat in which each hair is light-colored at its base but darkens toward its tip is called which of these?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Shaded, smoke and cameo are names used to describe this type of hair coloration. Beautiful on both short- and long-haired cats!",
        "itemId": 15,
        "answers": [
            {
                "id": 520,
                "answer": "brindled",
                "isCorrect": false
            },
            {
                "id": 521,
                "answer": "shaded",
                "isCorrect": true
            },
            {
                "id": 522,
                "answer": "tabby",
                "isCorrect": false
            },
            {
                "id": 523,
                "answer": "striped",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 159,
        "question": "9. Winston Churchill was comforted in his last years by his beloved cat Jock. In his will, he left his home to the state as a museum, and specified that a cat named Jock should always live there. He also wanted the cats to look like the first Jock, including their color. What color?",
        "isMultipleChoiceQuestion": true,
        "explanation": "When Churchill was in his eighties, his pet cat died and he decided not to get another as he felt certain the cat would outlive him. He sank into deep depression and waited to die. Friends brought him a kitten anyway, and Jock brought back joy into his life for several years.\n\nThis question honors Churchie, my youngest. He has a fine orange tabby coat and has an air of dignified reserve. He looks a little like a British Shorthair, but is really a straight-eared Scottish Fold.",
        "itemId": 15,
        "answers": [
            {
                "id": 524,
                "answer": "Ginger",
                "isCorrect": true
            },
            {
                "id": 525,
                "answer": "White",
                "isCorrect": false
            },
            {
                "id": 526,
                "answer": "Black",
                "isCorrect": false
            },
            {
                "id": 527,
                "answer": "Tabby",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 160,
        "question": "10. Brown, brown, brown! No tabby, no ticking, no fooling around describes which of these cats?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Burmese cats are registered in several colors. Bombay cats are patent-leather black, and Korats always blue. Havana cats have no connection with Cuba, but their rich brown coats reminded breeders of fine cigars!",
        "itemId": 15,
        "answers": [
            {
                "id": 528,
                "answer": "Bombay",
                "isCorrect": false
            },
            {
                "id": 529,
                "answer": "Burmese",
                "isCorrect": false
            },
            {
                "id": 530,
                "answer": "Havana",
                "isCorrect": true
            },
            {
                "id": 531,
                "answer": "Korat",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 161,
        "question": "1. So I googled \"cats\" and found an interesting breed called the Bengal cat. The internet tells me it is a hybrid domestic cat created by crossing a domestic cat with a small wild cat from Asia. Which small wild cat from Asia is used to create the domestic Bengal cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The Asian leopard cat (ALC) is a small wild cat. There are about ten subspecies and range from India through East Asia up to Siberia and the various archipelagoes of Southeast Asia. They are distantly related to the leopard but are much smaller, about house cat size. Bengal cats go back to the 1930s. They have beautiful spotting. I made up the three incorrect answers. Since the Bengal domesticated cat is spotted, rather than striped, I was pretty sure it was not related to the Bengal tiger, which is not a small wild cat.",
        "itemId": 16,
        "answers": [
            {
                "id": 532,
                "answer": "Burmese python cat",
                "isCorrect": false
            },
            {
                "id": 533,
                "answer": "Asian leopard cat",
                "isCorrect": true
            },
            {
                "id": 534,
                "answer": "Indian maneless lion cat",
                "isCorrect": false
            },
            {
                "id": 535,
                "answer": "Abyssinian spotted tabby",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 162,
        "question": "2. OK, I always thought black cats were bad luck, but it appears that a specific breed of cat was developed because, as Wikipedia says, \"Black cats seem to be universally loved.\" What cat breed resulted from the desire to develop a domestic cat with a \"sleek, tight, black coat\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "According to a website on the history of the Bombay cat, Louisville, Kentucky, cat breeder Nikki Horner was inspired by the beauty of the black leopard of India and began breeding the Bombay cat in 1953, although it was first recognized as a new breed in 1976. If you google \"Calcutta cat,\" you will find out about a type of boat called the Calcutta catamaran. Lhasa refers to a dog breed called the Lhasa Apso. If you google \"Beijing cat,\" you will discover a volunteer organization dedicated to rescuing cats.",
        "itemId": 16,
        "answers": [
            {
                "id": 536,
                "answer": "the Beijing",
                "isCorrect": false
            },
            {
                "id": 537,
                "answer": "the Calcutta",
                "isCorrect": false
            },
            {
                "id": 538,
                "answer": "the Bombay",
                "isCorrect": true
            },
            {
                "id": 539,
                "answer": "the Lhasa",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 163,
        "question": "3. According to the website \"Animal-World,\" there are four types of cats. Which of these four types are the \"wild\" cat species?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The lack of the term \"breeds\" is probably a giveaway to this question, as the website I was using for research uses the term \"cat breeds\" for the species it calls Felis catus or Felis domesticus.",
        "itemId": 16,
        "answers": [
            {
                "id": 540,
                "answer": "natural cat breeds",
                "isCorrect": false
            },
            {
                "id": 541,
                "answer": "hybrid cat breeds",
                "isCorrect": false
            },
            {
                "id": 542,
                "answer": "mutation cat breeds",
                "isCorrect": false
            },
            {
                "id": 543,
                "answer": "exotic cats",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 164,
        "question": "4. Speaking of the four types of cats, which type, according to the \"Animal-World\" website, makes up \"more than 99% of the world\u0027s total cat population\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The website also uses the term \"mixed cat breeds\" for the hybrid group. It says a hybrid \"is any cat that has more than one breed in its blood.\" Purebred domestic cats are the group of \"natural cat breeds,\" while the \"mutation cat breeds\" are those bred for some specific unusual mutated characteristic, such in the cases of the Scottish fold or the Sphynx breeds.",
        "itemId": 16,
        "answers": [
            {
                "id": 544,
                "answer": "natural cat breeds",
                "isCorrect": false
            },
            {
                "id": 545,
                "answer": "mutation cat breeds",
                "isCorrect": false
            },
            {
                "id": 546,
                "answer": "exotic cats",
                "isCorrect": false
            },
            {
                "id": 547,
                "answer": "hybrid cat breeds",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 165,
        "question": "5. My favorite cat is Felis concolor, a large wild cat with a wide range throughout the Western Hemisphere. What are common names for this beautiful cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The range of the cougar extends from southern Canada all the way to southern Argentina, and with forty names in English alone, the cat holds the Guinness record for the animal with the most names. In Iowa we often call it a mountain lion, but as the mascot for the University of Northern Iowa, we call it a panther. Penn State\u0027s Nittany Lion mascot is also of this species, as are the Cougar mascots of the University of Houston and Washington State.",
        "itemId": 16,
        "answers": [
            {
                "id": 548,
                "answer": "all of these and more",
                "isCorrect": true
            },
            {
                "id": 549,
                "answer": "puma and catamount",
                "isCorrect": false
            },
            {
                "id": 550,
                "answer": "cougar and panther",
                "isCorrect": false
            },
            {
                "id": 551,
                "answer": "mountain lion and catamount",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 166,
        "question": "6. Grumpy Cat was an internet celebrity, getting over three million \"likes\" throughout the middle of 2013, and the Grumpy Cat Inc. company had an estimated value of a million dollars. So what breed is Grumpy Cat (whose real name is Tardar Sauce)?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Owner Tabatha Bundesen says on the Grumpy Cat website that Tardar Sauce\u0027s mother is a calico domestic shorthair and her father \"has gray and white stripes\" without identifying a breed. She goes on to say that T.S. looks nothing like either parent, and she (Bundesen) is not even confident that the \"father\" is the actual father. Tardar Sauce\u0027s facial expression is due to feline dwarfism. Grumpy Cat\u0027s photo sessions are once a week.",
        "itemId": 16,
        "answers": [
            {
                "id": 552,
                "answer": "Norwegian Forest Cat",
                "isCorrect": false
            },
            {
                "id": 553,
                "answer": "Her owner doesn\u0027t know",
                "isCorrect": true
            },
            {
                "id": 554,
                "answer": "Manx",
                "isCorrect": false
            },
            {
                "id": 555,
                "answer": "Maine Coon",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 167,
        "question": "7. While most of the characters in the musical \"Cats,\" are not intended to be identified by breed, I have been able to find three individuals who are. One of which is Griddlebone, often seen in various websites as Lady Griddlebone. She is distinctively described as a \"fluffy white queen,\" and as such is identified as the breed that is the favorite of American cat owners. Which breed is this, which frequently features a flat or \"peke\" face?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Griddlebone is also a member of Macavity\u0027s crime group. Persians are a long-hair breed, while the other choices are all short-haired and are not often seen as white. The Persian was first developed in Britain, but since World War II has occupied the top spot among American cat breeders. The \"peke-face,\" named after similar characteristics of the Pekingese dog breed, is a recent development which has generated a lot of discussion among cat fanciers.",
        "itemId": 16,
        "answers": [
            {
                "id": 556,
                "answer": "Egyptian Mau",
                "isCorrect": false
            },
            {
                "id": 557,
                "answer": "Savannah",
                "isCorrect": false
            },
            {
                "id": 558,
                "answer": "Persian",
                "isCorrect": true
            },
            {
                "id": 559,
                "answer": "Sphynx",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 168,
        "question": "8. Famous cats of this breed include Mimi, once owned by John Lennon; Marcus, a gift to James Dean from Liz Taylor; and pets of two Presidential daughters, Amy Carter\u0027s Misty Malarky Ying Yang, and Susan Ford\u0027s Shan Shein. Name this breed, once known for crossing its eyes when angry, if you please.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Other Siamese celebrities, if you please, include British PM Harold Wilson\u0027s Nemo, Syd Barrett\u0027s Lucifer Sam (who was also the subject of a Pink Floyd song), and Anthony Burgess\u0027 Lalage. The Siamese characteristic of crossed eyes, once common with the breed, has been largely eliminated through selective breeding.",
        "itemId": 16,
        "answers": [
            {
                "id": 560,
                "answer": "Siamese",
                "isCorrect": true
            },
            {
                "id": 561,
                "answer": "Chartreux",
                "isCorrect": false
            },
            {
                "id": 562,
                "answer": "Maine Coon",
                "isCorrect": false
            },
            {
                "id": 563,
                "answer": "Cornish Rex",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 169,
        "question": "9. While searching for interesting information about cats by cat dummy, yours truly, (is there a book called \"Cats for Dummies\"?), I came across the term \"tortoiseshell cat.\" Is that a breed or what?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The tortoiseshell coat coloration has shades of red, black, and white, although the red shade may be up to orange, and the white could run to a cream color. Several breeds come in tortoiseshell, including both long and short hair. Calico is another name for a tortoiseshell. And, yes, there is not only a \"Cats for Dummies,\" but also a \"Kittens for Dummies.\" Before I attempt to do another cat quiz, I am definitely going to have to buy a book for help.",
        "itemId": 16,
        "answers": [
            {
                "id": 564,
                "answer": "It is a breed developed from Galapagos wild cats.",
                "isCorrect": false
            },
            {
                "id": 565,
                "answer": "It is a coat color variety, like tabby.",
                "isCorrect": true
            },
            {
                "id": 566,
                "answer": "It is a feline skin disease causing rough, scaly skin.",
                "isCorrect": false
            },
            {
                "id": 567,
                "answer": "It is a feral cat subspecies with protective coloration.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 170,
        "question": "10. After reading about all these cats, the breed that still intrigues me most is an American breed whose origins are unknown. It is a large long-hair with at least two possible origins. One is that Marie Antoinette, before her execution, tried to escape France along with her favorite Turkish Angora cats. Long to short, she didn\u0027t make it, but the cats did, all the way to America. Another theory is that the cats originated from a mixture of Viking cats, perhaps ancestors of the modern Norwegian forest cat, and American cats. Can you guess which large breed inspired these stories?",
        "isMultipleChoiceQuestion": true,
        "explanation": "One thing for sure, the Maine Coon cat did not originate as a mixture of cats and raccoons, something I know isn\u0027t possible, even though I don\u0027t know much about cats. One theory as to their origin is that they descended from long hair cats brought to America by an Englishman named Captain Charles Coon. Other names for the Maine Coon cat are Maine shag, snowshoe cat, and American longhair.",
        "itemId": 16,
        "answers": [
            {
                "id": 568,
                "answer": "California Spangled",
                "isCorrect": false
            },
            {
                "id": 569,
                "answer": "Ragdoll",
                "isCorrect": false
            },
            {
                "id": 570,
                "answer": "Maine Coon Cat",
                "isCorrect": true
            },
            {
                "id": 571,
                "answer": "Munchkin",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 171,
        "question": "1. Siamese cats originated in Thailand but both the look and breed standard have gone through changes over the centuries. What was a common trait of the original Siamese cats which has since been bred out or looked at as a flaw in the current day?",
        "isMultipleChoiceQuestion": true,
        "explanation": "In the 21st century, a tail kink is considered a flaw. You will, however, still find tail kinks in the street cats in Thailand.",
        "itemId": 17,
        "answers": [
            {
                "id": 572,
                "answer": "A tail kink",
                "isCorrect": true
            },
            {
                "id": 573,
                "answer": "Dark leg stripes",
                "isCorrect": false
            },
            {
                "id": 574,
                "answer": "Blue eyes",
                "isCorrect": false
            },
            {
                "id": 575,
                "answer": "Pink ears",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 172,
        "question": "2. This beautiful, large cat is called Panthera onca. It is practically extinct, except for breeding programs, and it is the only member of the Panthera genus found in the Americas. It is the only big cat, other than a tiger, who are known to love swimming. Can you name this cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This spotted cat resembles a leopard but physically there are some significant differences. They have extremely strong jaws and are considered even stronger than a lion or a tiger. They kill by biting their prey in the head and deliver a killing bite directly to the brain. The few who are left live in rainforests but they have also been known to live in other areas. There is evidence of jaguars in Asia and Africa but genetics show differences there as well.",
        "itemId": 17,
        "answers": [
            {
                "id": 576,
                "answer": "Lion",
                "isCorrect": false
            },
            {
                "id": 577,
                "answer": "Jaguar",
                "isCorrect": true
            },
            {
                "id": 578,
                "answer": "Black panther",
                "isCorrect": false
            },
            {
                "id": 579,
                "answer": "Leopard",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 173,
        "question": "3. This entire breed of cat can trace its lineage to a single female named Susie. She was a barn cat. In 1961 Susie was bred and what seemed, at first, to be a flaw, became a genetic marker Cat Fanciers wanted. Susie was white but her offspring now come in most any color, combination of colors, long or short-haired. What owl-faced breed of domestic cat am I talking about?",
        "isMultipleChoiceQuestion": true,
        "explanation": "When Susie, the barn cat, was found in Perthshire, Scotland she had these funny folded ears. When she was bred, she passed the trait onto only a few of her offspring. Scottish fold cats are born with straight, unfolded ears and the fold will show up after a few weeks. This breed of cat was registered with Cat Fanciers registration in 1966. The breed wasn\u0027t well accepted in Europe due to concerns of infection of the folded ears but since coming to the Americas, they have been bred with heartier breeds such as the American shorthair and they are well accepted in current decades.",
        "itemId": 17,
        "answers": [
            {
                "id": 580,
                "answer": "Turkish van",
                "isCorrect": false
            },
            {
                "id": 581,
                "answer": "Domestic short hair",
                "isCorrect": false
            },
            {
                "id": 582,
                "answer": "Scottish fold",
                "isCorrect": true
            },
            {
                "id": 583,
                "answer": "Burmese",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 174,
        "question": "4. This question isn\u0027t about a breed of cat, it\u0027s actually about a color pattern. We have all seen or even owned a cat, of no specific breed, that was white with spots of orange and black. They can be long-haired or short. I had one that was actually black with spots of orange and white. These are actually tortoiseshell cats that have an additional white gene. What is this coloration called?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Calico coloring isn\u0027t really that unusual. What is unusual is that calico cats are nearly always female. The genetic trait that causes a cat to be calico is connected to the X chromosome. In many cultures, the calico cat is thought to be good luck. In the US, they are just pretty.",
        "itemId": 17,
        "answers": [
            {
                "id": 584,
                "answer": "Rex",
                "isCorrect": false
            },
            {
                "id": 585,
                "answer": "Calico",
                "isCorrect": true
            },
            {
                "id": 586,
                "answer": "Patterned",
                "isCorrect": false
            },
            {
                "id": 587,
                "answer": "Splotched",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 175,
        "question": "5. This breed of cat is one of the most popular breeds in the US. They are known for their fluffy white fur, round face and a smashed looking muzzle. They do come in other colors but they are more rare. The breed was developed by the British but have become very popular in the US since WWII. Any idea which breed I\u0027m referring to?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The name refers to Persia, where similar cats have been found but this breed didn\u0027t come into popularity until the British developed them in the 19th century. In Britain, this breed is called longhair or Persian longhair. The enhanced breeding to try to attain other colors has also led to problems with the nasal passages. They have become too flat and cause problems. This breed is also known for kidney disease but most often in the British variety.",
        "itemId": 17,
        "answers": [
            {
                "id": 588,
                "answer": "American flat face",
                "isCorrect": false
            },
            {
                "id": 589,
                "answer": "American lop",
                "isCorrect": false
            },
            {
                "id": 590,
                "answer": "Persian",
                "isCorrect": true
            },
            {
                "id": 591,
                "answer": "British white cat",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 176,
        "question": "6. This next wild cat is often referred to as a dwarf leopard. It is the largest of the genus Leopardus. It has sleek, smooth fur, rounded ears and relatively large front paws. A nocturnal hunter and a fierce fighter for food or territory. Can you name this wild beauty?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The ocelot is a leopard-spotted cat who looks similar to a large house cat. They can be found from the Amazon rainforest all the way to Mexico and even into Texas, USA. From the 1970s to the 1990s this cat was endangered due to hunters wanting the fur, since 1996 they are less endangered. There are 12 subspecies of ocelot, named by where they are geographically located.",
        "itemId": 17,
        "answers": [
            {
                "id": 592,
                "answer": "Jaguar",
                "isCorrect": false
            },
            {
                "id": 593,
                "answer": "Tiger",
                "isCorrect": false
            },
            {
                "id": 594,
                "answer": "Ocelot",
                "isCorrect": true
            },
            {
                "id": 595,
                "answer": "Manx",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 177,
        "question": "7. This unusual breed of domestic cat is unique for a few different reasons. These cats have down covering their bodies, instead of fur. The down is actually curly instead of woolly. They have large eyes for their size and large, low-set ears. They have only been a registered breed since the 1960s. Any ideas as to this breed?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The Devon rex isn\u0027t actually related to the Cornish or German rex breeds. They are considered very smart and easily trainable. They are very playful and full of energy. They are slightly built and have long limbs. They are very people oriented and have even been referred to as \"a monkey in a cat suit\".",
        "itemId": 17,
        "answers": [
            {
                "id": 596,
                "answer": "Persian",
                "isCorrect": false
            },
            {
                "id": 597,
                "answer": "English shorthair",
                "isCorrect": false
            },
            {
                "id": 598,
                "answer": "American shorthair",
                "isCorrect": false
            },
            {
                "id": 599,
                "answer": "Devon rex",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 178,
        "question": "8. This next wild cat is the national animal of Bangladesh, India, Vietnam, Malaysia and South Korea. It is highly recognizable and beautiful. The global population of this cat is thought to be under 4000 animals. Their colorization goes from black to orange to white. What is this majestic beast called?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Tigers used to range all across Asia, from Turkey to Russia. Their habitat has shrunk over 40% since the 1900s. There are six remaining subspecies of tiger left but all are considered endangered. The stripe patterns are individual to each animal, similar to zebras.",
        "itemId": 17,
        "answers": [
            {
                "id": 600,
                "answer": "Manx",
                "isCorrect": false
            },
            {
                "id": 601,
                "answer": "Lion",
                "isCorrect": false
            },
            {
                "id": 602,
                "answer": "Tiger",
                "isCorrect": true
            },
            {
                "id": 603,
                "answer": "Leopard",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 179,
        "question": "9. This next breed of domestic cat is my personal favorite. They hail from the Isle of Man. They can come in any color or pattern, although white is rare. They are strong and stocky. They are excellent hunters and loved by farmers and ship captains to keep rodents at a minimum. They have elongated hind legs and very round heads. On their home island, they are referred to as a \"stubbin\". Any idea as to the name of this breed?",
        "isMultipleChoiceQuestion": true,
        "explanation": "This breed has a naturally occurring genetic mutation that shortens the tail. The Manx is a very popular breed of cat all over the world. They are descended from African wild cats. A cute story says: there are various fanciful Lamarckian folktales that seek to explain why the Manx has a short to no tail. In one of them, the biblical Noah closed the door of the Ark when it began to rain, and accidentally cut off the tail of the Manx cat who had almost been left behind.",
        "itemId": 17,
        "answers": [
            {
                "id": 604,
                "answer": "Manx",
                "isCorrect": true
            },
            {
                "id": 605,
                "answer": "Scottish Short",
                "isCorrect": false
            },
            {
                "id": 606,
                "answer": "Bobtail",
                "isCorrect": false
            },
            {
                "id": 607,
                "answer": "Manian",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 180,
        "question": "10. No cat quiz would be complete without a question about this most regal of wild beasts. With a scientific name of Panthera leo, it is the most recognized cat in the wild kingdom. It even had an animated film about it. Can you name it?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The lion is actually the second largest cat in the wild kingdom after the tiger. At one time in history, lions had the second largest population after humans and were found in grasslands across the globe. Since the second half of the 20th century, their numbers have declined everywhere and are no longer found in the Americas or parts of Asia. By far, the majority of lions are now found in African wildlife sanctuaries and zoos.",
        "itemId": 17,
        "answers": [
            {
                "id": 608,
                "answer": "Tiger",
                "isCorrect": false
            },
            {
                "id": 609,
                "answer": "Manx",
                "isCorrect": false
            },
            {
                "id": 610,
                "answer": "Leopard",
                "isCorrect": false
            },
            {
                "id": 611,
                "answer": "Lion",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 181,
        "question": "1. Cats love milk and should be fed one saucer every day.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Although many cats are fond of drinking milk, most are actually lactose intolerant and feeding milk too often can cause problems with the cat\u0027s digestive system and cause diarrhea.\nLike all mammmals, for the first six or seven weeks of life kittens drink their mother\u0027s milk. This substance contains antitoxins that protect the young animals from disease in their early stages of life.",
        "itemId": 18,
        "answers": [
            {
                "id": 612,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 613,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 182,
        "question": "2. The barbs on a cat\u0027s tongue are used for which of these?",
        "isMultipleChoiceQuestion": true,
        "explanation": "While many people think that the cat\u0027s tongue was designed for grooming, it actually evolved to help wild cats get all of the flesh off of the bones of their prey.",
        "itemId": 18,
        "answers": [
            {
                "id": 614,
                "answer": "they are pointless",
                "isCorrect": false
            },
            {
                "id": 615,
                "answer": "grooming",
                "isCorrect": false
            },
            {
                "id": 616,
                "answer": "scraping meat off of bones",
                "isCorrect": true
            },
            {
                "id": 617,
                "answer": "tickling people",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 183,
        "question": "3. How many eyelids do cats have on each eye?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats actually have three \"eyelids\"; the third one is called the nictitating membrane and isn\u0027t usually seen unless the cat is sick.",
        "itemId": 18,
        "answers": [
            {
                "id": 618,
                "answer": "One",
                "isCorrect": false
            },
            {
                "id": 619,
                "answer": "Three",
                "isCorrect": true
            },
            {
                "id": 620,
                "answer": "Two",
                "isCorrect": false
            },
            {
                "id": 621,
                "answer": "None",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 184,
        "question": "4. About how many hours a day does a cat normally sleep?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Even big cats sleep about 16 hours a day. Essentially, this means that cats only spend about 1/3 of their lives awake!",
        "itemId": 18,
        "answers": [
            {
                "id": 622,
                "answer": "23",
                "isCorrect": false
            },
            {
                "id": 623,
                "answer": "16",
                "isCorrect": true
            },
            {
                "id": 624,
                "answer": "8",
                "isCorrect": false
            },
            {
                "id": 625,
                "answer": "4",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 185,
        "question": "5. All cats have at least some covering of hair, even those described as hairless.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats are mammals, and all mammals have fur. One breed, the Sphynx, is called \u0027hairless\u0027 but it too has very fine very short fuzz on its body.",
        "itemId": 18,
        "answers": [
            {
                "id": 626,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 627,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 186,
        "question": "6. Cats always purr when they are happy.",
        "isMultipleChoiceQuestion": true,
        "explanation": "While this is still a subject of some study, most agree that cats will purr when content. However, cats have been known to purr while in extreme pain (although it is a deeper, harsher purr) and queens often purr while giving birth.",
        "itemId": 18,
        "answers": [
            {
                "id": 628,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 629,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 187,
        "question": "7. Cats are independent animals, so they can live outdoors on their own with no problems.",
        "isMultipleChoiceQuestion": true,
        "explanation": "The streets of the modern world are filled with speeding cars, manholes, people with guns, people with poisons, not to mention stray dogs. Domestic cats were bred to be pets. The average lifespan of an indoor cat is 17 years, while for an outdoor cat it is only 3 years. The world is full of homeless people and animals; keep your cat indoors for its safety and well-being.",
        "itemId": 18,
        "answers": [
            {
                "id": 630,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 631,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 188,
        "question": "8. Not all cats are affected by catnip.",
        "isMultipleChoiceQuestion": true,
        "explanation": "About 60% of cats are affected by catnip. Intact males are more likely to be affected, according to some, because catnip gives off a scent similar to the pheremones given off by females while in heat.",
        "itemId": 18,
        "answers": [
            {
                "id": 632,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 633,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 189,
        "question": "9. Cats are not social animals and never live in groups.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Feral cats often live in colonies, usually many females that all help to take care of the kittens. Wild cats live alone except at mating time, but lions live in prides. Prides are also female groups, usually serviced by one male.",
        "itemId": 18,
        "answers": [
            {
                "id": 634,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 635,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 190,
        "question": "10. It is healthy for a cat to have one litter of kittens before having her spayed.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Spaying and neutering cats at an early age helps improve longetivity, attitude, overall health, and decreases the risk of cancer.",
        "itemId": 18,
        "answers": [
            {
                "id": 636,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 637,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 191,
        "question": "1. In Puss in Boots, Puss only asked for three items to make his master\u0027s fortune. Which item did Puss NOT ask for?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Puss never asked for a walking stick to make his master\u0027s fortune.",
        "itemId": 19,
        "answers": [
            {
                "id": 638,
                "answer": "cloak",
                "isCorrect": false
            },
            {
                "id": 639,
                "answer": "walking stick",
                "isCorrect": true
            },
            {
                "id": 640,
                "answer": "hat with a feather",
                "isCorrect": false
            },
            {
                "id": 641,
                "answer": "boots",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 192,
        "question": "2. What did Dick Whittington trade his cat for?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Dick Whittington traded his cat for gold and jewels and eventually ended up the mayor of London.",
        "itemId": 19,
        "answers": [
            {
                "id": 642,
                "answer": "a dog",
                "isCorrect": false
            },
            {
                "id": 643,
                "answer": "a coat",
                "isCorrect": false
            },
            {
                "id": 644,
                "answer": "gold and jewels",
                "isCorrect": true
            },
            {
                "id": 645,
                "answer": "a house",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 193,
        "question": "3. Sir Isaac Newton invented which device for his feline friends?",
        "isMultipleChoiceQuestion": true,
        "explanation": "If you got this one you are a true master of cat trivia.",
        "itemId": 19,
        "answers": [
            {
                "id": 646,
                "answer": "the scatching post",
                "isCorrect": false
            },
            {
                "id": 647,
                "answer": "the swinging cat door",
                "isCorrect": true
            },
            {
                "id": 648,
                "answer": "cat collars",
                "isCorrect": false
            },
            {
                "id": 649,
                "answer": "the litter box",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 194,
        "question": "4. Abraham Lincoln brought the first cat to live in the White House. What was his cat\u0027s name?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Abraham Lincoln was known as a true cat lover. Ah, all great minds...have a cat in their lap!",
        "itemId": 19,
        "answers": [
            {
                "id": 650,
                "answer": "Missy",
                "isCorrect": false
            },
            {
                "id": 651,
                "answer": "Tabby",
                "isCorrect": true
            },
            {
                "id": 652,
                "answer": "Molly",
                "isCorrect": false
            },
            {
                "id": 653,
                "answer": "Stripes",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 195,
        "question": "5. Writer Rita Mae Brown often has help with her mystery novels from which cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Look to the cover of each book and you\u0027ll find credit given to Sneaky Pie Brown!",
        "itemId": 19,
        "answers": [
            {
                "id": 654,
                "answer": "Charlie Pie Brown",
                "isCorrect": false
            },
            {
                "id": 655,
                "answer": "Sneaky Pie Brown",
                "isCorrect": true
            },
            {
                "id": 656,
                "answer": "Sneakers and Whiskers Brown",
                "isCorrect": false
            },
            {
                "id": 657,
                "answer": "Star Brown",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 196,
        "question": "6. Which of these Beatrix Potter characters is NOT a cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Mrs Tiggy Winkle is a hedgehog.",
        "itemId": 19,
        "answers": [
            {
                "id": 658,
                "answer": "Moppet",
                "isCorrect": false
            },
            {
                "id": 659,
                "answer": "Tom Kitten",
                "isCorrect": false
            },
            {
                "id": 660,
                "answer": "Mrs Tiggy Winkle",
                "isCorrect": true
            },
            {
                "id": 661,
                "answer": "Tabitha Twitchit",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 197,
        "question": "7. In Lewis Carroll\u0027s Alice in Wonderland, Alice has her own pet feline, named what?",
        "isMultipleChoiceQuestion": true,
        "explanation": "In the beginning of the novel, Alice is talking to Dinah the cat before her adventures begin \u0027down the rabbit hole\u0027.",
        "itemId": 19,
        "answers": [
            {
                "id": 662,
                "answer": "Molly",
                "isCorrect": false
            },
            {
                "id": 663,
                "answer": "Sissy",
                "isCorrect": false
            },
            {
                "id": 664,
                "answer": "Prissy",
                "isCorrect": false
            },
            {
                "id": 665,
                "answer": "Dinah",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 198,
        "question": "8. In the comic strip, Bloom County, what cat has been a member of the rock group Deathtongue, a surrogate body for Donald Trump and a resident of the Betty Ford Clinic?",
        "isMultipleChoiceQuestion": true,
        "explanation": "ACK! Bill the Cat also appears in the comic strip Outland.",
        "itemId": 19,
        "answers": [
            {
                "id": 666,
                "answer": "Dallas",
                "isCorrect": false
            },
            {
                "id": 667,
                "answer": "Heathcliff",
                "isCorrect": false
            },
            {
                "id": 668,
                "answer": "Bill the Cat",
                "isCorrect": true
            },
            {
                "id": 669,
                "answer": "Garfield",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 199,
        "question": "9. According to the Disney song, the tops of tiggers are made out of rubber. What are their bottoms made from?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Tigger, from Winnie the Pooh, sings this famous song in the Disney adaptation.",
        "itemId": 19,
        "answers": [
            {
                "id": 670,
                "answer": "Strings",
                "isCorrect": false
            },
            {
                "id": 671,
                "answer": "Springs",
                "isCorrect": true
            },
            {
                "id": 672,
                "answer": "Wings",
                "isCorrect": false
            },
            {
                "id": 673,
                "answer": "Things",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 200,
        "question": "10. What is the name of the cat brought back to life in Stephen King\u0027s \"Pet Sematary\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "...And Church is ONE MAD CAT!",
        "itemId": 19,
        "answers": [
            {
                "id": 674,
                "answer": "Scraps",
                "isCorrect": false
            },
            {
                "id": 675,
                "answer": "Church",
                "isCorrect": true
            },
            {
                "id": 676,
                "answer": "Tuffy",
                "isCorrect": false
            },
            {
                "id": 677,
                "answer": "Jesse",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 201,
        "question": "11. Who is the evil tiger in Rudyard Kipling\u0027s \"Jungle Book\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Shere Khan is the tiger in search of a man-cub to eat.",
        "itemId": 19,
        "answers": [
            {
                "id": 678,
                "answer": "Babaloo",
                "isCorrect": false
            },
            {
                "id": 679,
                "answer": "Basheba",
                "isCorrect": false
            },
            {
                "id": 680,
                "answer": "Sheer Evil",
                "isCorrect": false
            },
            {
                "id": 681,
                "answer": "Shere Khan",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 202,
        "question": "12. What book of cat poetry was the inspiration for Andrew Lloyd Webber\u0027s musical, \"Cats\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "T. S. Eliot wrote a whimsical book of cat poetry in \"Old Possum\u0027s Book of Practical Cats\".",
        "itemId": 19,
        "answers": [
            {
                "id": 682,
                "answer": "Jellical Cats",
                "isCorrect": false
            },
            {
                "id": 683,
                "answer": "Cats",
                "isCorrect": false
            },
            {
                "id": 684,
                "answer": "Old Possum\u0027s Book of Practical Cats",
                "isCorrect": true
            },
            {
                "id": 685,
                "answer": "Cats, I Have Known",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 203,
        "question": "13. The first Siamese cat brought to the United States was a gift to which president?",
        "isMultipleChoiceQuestion": true,
        "explanation": "We are Siamese if you please, we are Siamese if you don\u0027t please...",
        "itemId": 19,
        "answers": [
            {
                "id": 686,
                "answer": "Teddy Roosevelt",
                "isCorrect": false
            },
            {
                "id": 687,
                "answer": "Andrew Jackson",
                "isCorrect": false
            },
            {
                "id": 688,
                "answer": "Rutherford B. Hayes",
                "isCorrect": true
            },
            {
                "id": 689,
                "answer": "William Taft",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 204,
        "question": "14. What instrument did the cat play in the story, \"The Bremen Town Musicians\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "None of the Bremen musicians played any instruments. They were just a vocals-only band.",
        "itemId": 19,
        "answers": [
            {
                "id": 690,
                "answer": "voice",
                "isCorrect": true
            },
            {
                "id": 691,
                "answer": "violin",
                "isCorrect": false
            },
            {
                "id": 692,
                "answer": "fiddle",
                "isCorrect": false
            },
            {
                "id": 693,
                "answer": "whisker harp",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 205,
        "question": "15. Which one of the following is NOT a published title by mystery writer Lillian Jackson Braun?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The only cat eating cantaloupe is our well-fed Ollie Cat! Yum!",
        "itemId": 19,
        "answers": [
            {
                "id": 694,
                "answer": "The Cat Who Robbed a Bank",
                "isCorrect": false
            },
            {
                "id": 695,
                "answer": "The Cat Who Ate Cantaloupe",
                "isCorrect": true
            },
            {
                "id": 696,
                "answer": "The Cat Who Saw Stars",
                "isCorrect": false
            },
            {
                "id": 697,
                "answer": "The Cat Who Played Post Office",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 206,
        "question": "16. In Lewis Carroll\u0027s \"Alice in Wonderland\", what famous feline has the power to appear and disappear at will?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Easy question for you cat fanatics!",
        "itemId": 19,
        "answers": [
            {
                "id": 698,
                "answer": "The Checkered Cat",
                "isCorrect": false
            },
            {
                "id": 699,
                "answer": "The Caterpillar Cat",
                "isCorrect": false
            },
            {
                "id": 700,
                "answer": "The Worshire Cat",
                "isCorrect": false
            },
            {
                "id": 701,
                "answer": "The Cheshire Cat",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 207,
        "question": "17. What animal is the subject of the novel \"Born Free\"?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Now, just try to get the theme song of the movie out of your head!",
        "itemId": 19,
        "answers": [
            {
                "id": 702,
                "answer": "panther",
                "isCorrect": false
            },
            {
                "id": 703,
                "answer": "tiger",
                "isCorrect": false
            },
            {
                "id": 704,
                "answer": "lion",
                "isCorrect": true
            },
            {
                "id": 705,
                "answer": "cheetah",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 208,
        "question": "18. Did animal story writer James Herriot ever do a collection of cat stories?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Yes, Mr. Herriot certainly did! \"James Herriot\u0027s Cat Stories\" is the title.",
        "itemId": 19,
        "answers": [
            {
                "id": 706,
                "answer": "Yes",
                "isCorrect": false
            },
            {
                "id": 707,
                "answer": "No",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 209,
        "question": "19. In the Disney version of Pinocchio, Geppetto owns a black and white kitten. What is the kitten called?",
        "isMultipleChoiceQuestion": true,
        "explanation": "...And in our opinion, Figaro saw that wooden boy as one BIG scratching post! Yippee!",
        "itemId": 19,
        "answers": [
            {
                "id": 708,
                "answer": "Lucky",
                "isCorrect": false
            },
            {
                "id": 709,
                "answer": "Muffin",
                "isCorrect": false
            },
            {
                "id": 710,
                "answer": "Jiminy",
                "isCorrect": false
            },
            {
                "id": 711,
                "answer": "Figaro",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 210,
        "question": "20. Which one of these historical figures NEVER owned a cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Which just goes to show that cat-people are definitely some of the best people around!",
        "itemId": 19,
        "answers": [
            {
                "id": 712,
                "answer": "Theodore Roosevelt",
                "isCorrect": false
            },
            {
                "id": 713,
                "answer": "W.B. Yeats",
                "isCorrect": false
            },
            {
                "id": 714,
                "answer": "Mark Twain",
                "isCorrect": false
            },
            {
                "id": 715,
                "answer": "Adolf Hitler",
                "isCorrect": true
            }
        ]
    },
    {
        "id": 211,
        "question": "1. Cats can be right-pawed or left-pawed.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Just like people, cats can be lefties or righties. Researchers watched cats reaching for food. Out of more the 100 cats, about 40 reached with their right paw. About 10% are ambidextrous.",
        "itemId": 20,
        "answers": [
            {
                "id": 716,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 717,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 212,
        "question": "2. The technical term for a cat\u0027s hairball is a \u0027bezoar\u0027.",
        "isMultipleChoiceQuestion": true,
        "explanation": "The reason cats have hairballs is because they groom by licking themselves and therefore they consume the hair. Hairballs can be as big as ten centimetres long.",
        "itemId": 20,
        "answers": [
            {
                "id": 718,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 719,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 213,
        "question": "3. In which country were over 300,000 mummified cats found?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The cats were found in Egypt and then stripped of their wrappings and shipped off to farmers in England and the United States to be used as fertilizer.",
        "itemId": 20,
        "answers": [
            {
                "id": 720,
                "answer": "Afghanistan",
                "isCorrect": false
            },
            {
                "id": 721,
                "answer": "Iraq",
                "isCorrect": false
            },
            {
                "id": 722,
                "answer": "Egypt",
                "isCorrect": true
            },
            {
                "id": 723,
                "answer": "Iran",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 214,
        "question": "4. What are the names for a male and female cat?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The most used names for a female cat is a queen but in sometimes is called a molly. The male is called a tomcat but he can also be called a tom. A younger cat is called a kitten or catling.",
        "itemId": 20,
        "answers": [
            {
                "id": 724,
                "answer": "Sam and Sally",
                "isCorrect": false
            },
            {
                "id": 725,
                "answer": "Tomcat and Queen",
                "isCorrect": true
            },
            {
                "id": 726,
                "answer": "Kit and Kat",
                "isCorrect": false
            },
            {
                "id": 727,
                "answer": "King and Queen",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 215,
        "question": "5. Cats sleep an average of how many hours per day?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Cats sleep about 12 to 18 hours on average. Most cats will sleep for no more than 16 hours but some cats can sleep up to 20 hours in a 24 hour time stretch.",
        "itemId": 20,
        "answers": [
            {
                "id": 728,
                "answer": "12-18 hours",
                "isCorrect": true
            },
            {
                "id": 729,
                "answer": "4-5 hours",
                "isCorrect": false
            },
            {
                "id": 730,
                "answer": "10-12 hours",
                "isCorrect": false
            },
            {
                "id": 731,
                "answer": "22-24 hours",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 216,
        "question": "6. Calico cats are almost always what?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Calico cats are usually female. They are the cats with orange, black, and white fur.",
        "itemId": 20,
        "answers": [
            {
                "id": 732,
                "answer": "Female",
                "isCorrect": true
            },
            {
                "id": 733,
                "answer": "Male",
                "isCorrect": false
            },
            {
                "id": 734,
                "answer": "Aggressive",
                "isCorrect": false
            },
            {
                "id": 735,
                "answer": "Happy",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 217,
        "question": "7. What is the scientific name for cats?",
        "isMultipleChoiceQuestion": true,
        "explanation": "The scientific name for cats is Felis catus. The Panthera leo is a lion and is the only type cat that lives in groups. The Lynx rufus is a bobcat which is twice the size of a domesticated cat.",
        "itemId": 20,
        "answers": [
            {
                "id": 736,
                "answer": "Panthera leo",
                "isCorrect": false
            },
            {
                "id": 737,
                "answer": "Felis catus",
                "isCorrect": true
            },
            {
                "id": 738,
                "answer": "Canis lupus familiaris",
                "isCorrect": false
            },
            {
                "id": 739,
                "answer": "Lynx rufus",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 218,
        "question": "8. Over 4,000 years ago, the ancient Egyptians first adored cats for what special ability?",
        "isMultipleChoiceQuestion": true,
        "explanation": "Despite their cuddly appearance, cats are a threat to many small animals and rodents. The ancient Egyptians praised the way cats were able to kill rodents. In fact, in ancient Egypt, cats were sacred.",
        "itemId": 20,
        "answers": [
            {
                "id": 740,
                "answer": "Their intelligence.",
                "isCorrect": false
            },
            {
                "id": 741,
                "answer": "Their finesse in jumping.",
                "isCorrect": false
            },
            {
                "id": 742,
                "answer": "Their skill in killing rodents.",
                "isCorrect": true
            },
            {
                "id": 743,
                "answer": "Their expertise in grooming.",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 219,
        "question": "9. Cats can make over 100 vocal sounds.",
        "isMultipleChoiceQuestion": true,
        "explanation": "While cats can make over one hundred different sounds, dogs can only make ten. It is also known that the more you talk and try to communicate with your cat, the more it will try to communicate with you.",
        "itemId": 20,
        "answers": [
            {
                "id": 744,
                "answer": "True",
                "isCorrect": true
            },
            {
                "id": 745,
                "answer": "False",
                "isCorrect": false
            }
        ]
    },
    {
        "id": 220,
        "question": "10. Chocolate is good for cats.",
        "isMultipleChoiceQuestion": true,
        "explanation": "Chocolate is not good for cats, in fact, just like dogs, cats can be poisoned by chocolate. It can give them heart problems, seizures and high blood pressure.",
        "itemId": 20,
        "answers": [
            {
                "id": 746,
                "answer": "True",
                "isCorrect": false
            },
            {
                "id": 747,
                "answer": "False",
                "isCorrect": true
            }
        ]
    }
]

const QuestionList = (itemId) => {
    const questionList = questions.filter(question =>
        question.itemId === itemId
    ).map(question =>
        question.isMultipleChoiceQuestion
            ? (<MultipleQuestion question={question}/>)
            : (<NormalQuestion question={question}/>)
    )

    return (
        <div>
            {questionList}
        </div>
    )
}

export default QuestionList