import React, {useEffect, useRef} from 'react';
import {Header} from '../../components/Header';
import {View, StyleSheet, BackHandler, ScrollView} from 'react-native';
import {Text} from '../../components/Text';
import {
  STANDARD_THAI_FONT,
  STANDARD_FONT,
  COLORS_PRIMARY,
  STANDARD_THAI_FONT_BOLD,
} from '../../configs/theme';
import {Button} from 'react-native-paper';
import {Link} from '../../components/Link';
import {useNavigation} from '@react-navigation/native';
import {ScreenNavigationProp} from '../../configs/common';
import {SCREEN} from '../../configs/screens';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'column',
    padding: 10,
    flex: 1,
    backgroundColor: '#FFFFFF',
    // justifyContent: 'space-evenly',
  },
  loginBtn: {
    color: '#ffffff',
    borderRadius: 8,
    fontFamily: STANDARD_THAI_FONT,
    // alignSelf: 'center',
  },
});

const PolicySrceen: React.FC = () => {
  const navigation = useNavigation<ScreenNavigationProp>();
  const [endOfPage, setEndOfPage] = React.useState(false);
  const [policyAccepted, setPolicyAccepted] = React.useState(false);
  const heightRef = useRef(null);

  const handleExitApp = () => {
    setPolicyAccepted(false);
    BackHandler.exitApp();
  };

  useEffect(() => {
    if (policyAccepted) {
      navigation.navigate(SCREEN.LOGIN as any);
    }
  }, [policyAccepted]);

  const isCloseToBottom = nativeEvent => {
    const paddingToBottom = 20;
    return (
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom
    );
  };
  return (
    <View style={styles.main}>
      <Header color="textPrimary" />
      <View style={{backgroundColor: '#FFFFFF', flex: 0.2}}>
        <Text headerThai={true} colors="textPrimary">
          ข้อตกลงและเงื่อนไขการใช้บริการ
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          height: 600,
          marginTop: -30,
          padding: 2,
          flex: 2,
        }}>
        <ScrollView
          // ref={heightRef}
          onScroll={({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent)) {
              setEndOfPage(true);
            }
          }}
          scrollEventThrottle={400}
          style={{
            maxWidth: 380,
            height: 50,
            padding: 10,
            backgroundColor: '#E8E8E8',
            marginTop: 0,
            borderRadius: 3,
          }}>
          <Text>
            Privacy Policy for [YOUR SITE TITLE] If you require any more
            information or have any questions about our privacy policy, please
            feel free to contact us by email at [YOUR CONTACT LINK]. At [YOUR
            SITE URL] we consider the privacy of our visitors to be extremely
            important. This privacy policy document describes in detail the
            types of personal information is collected and recorded by [YOUR
            SITE URL] and how we use it. Log Files Like many other Web sites,
            [YOUR SITE URL] makes use of log files. These files merely logs
            visitors to the site – usually a standard procedure for hosting
            companies and a part of hosting services's analytics. The
            information inside the log files includes internet protocol (IP)
            addresses, browser type, Internet Service Provider (ISP), date/time
            stamp, referring/exit pages, and possibly the number of clicks. This
            information is used to analyze trends, administer the site, track
            user's movement around the site, and gather demographic information.
            IP addresses, and other such information are not linked to any
            information that is personally identifiable. Cookies and Web Beacons
            [YOUR SITE URL] uses cookies to store information about visitors'
            preferences, to record user-specific information on which pages the
            site visitor accesses or visits, and to personalize or customize our
            web page content based upon visitors' browser type or other
            information that the visitor sends via their browser. DoubleClick
            DART Cookie → Google, as a third party vendor, uses cookies to serve
            ads on [YOUR SITE URL]. → Google's use of the DART cookie enables it
            to serve ads to our site's visitors based upon their visit to [YOUR
            SITE URL] and other sites on the Internet. → Users may opt out of
            the use of the DART cookie by visiting the Google ad and content
            network privacy policy at the following URL –
            http://www.google.com/privacy_ads.html Our Advertising Partners Some
            of our advertising partners may use cookies and web beacons on our
            site. Our advertising partners include ……. Google Commission
            Junction Amazon Adbrite Clickbank Yahoo! Publisher Network Chitika
            Kontera While each of these advertising partners has their own
            Privacy Policy for their site, an updated and hyperlinked resource
            is maintained here: Privacy Policy Links. You may consult this
            listing to find the privacy policy for each of the advertising
            partners of [YOUR SITE URL]. These third-party ad servers or ad
            networks use technology in their respective advertisements and links
            that appear on [YOUR SITE URL] and which are sent directly to your
            browser. They automatically receive your IP address when this
            occurs. Other technologies (such as cookies, JavaScript, or Web
            Beacons) may also be used by our site's third-party ad networks to
            measure the effectiveness of their advertising campaigns and/or to
            personalize the advertising content that you see on the site. [YOUR
            SITE URL] has no access to or control over these cookies that are
            used by third-party advertisers. Third Party Privacy Policies You
            should consult the respective privacy policies of these third-party
            ad servers for more detailed information on their practices as well
            as for instructions about how to opt-out of certain practices. [YOUR
            SITE URL]'s privacy policy does not apply to, and we cannot control
            the activities of, such other advertisers or web sites. You may find
            a comprehensive listing of these privacy policies and their links
            here: Privacy Policy Links. If you wish to disable cookies, you may
            do so through your individual browser options. More detailed
            information about cookie management with specific web browsers can
            be found at the browsers' respective websites. What Are Cookies?
            Children's Information We believe it is important to provide added
            protection for children online. We encourage parents and guardians
            to spend time online with their children to observe, participate in
            and/or monitor and guide their online activity. [YOUR SITE URL] does
            not knowingly collect any personally identifiable information from
            children under the age of 13. If a parent or guardian believes that
            [YOUR SITE URL] has in its database the personally-identifiable
            information of a child under the age of 13, please contact us
            immediately (using the contact in the first paragraph) and we will
            use our best efforts to promptly remove such information from our
            records. Online Privacy Policy Only This privacy policy applies only
            to our online activities and is valid for visitors to our website
            and regarding information shared and/or collected there. This policy
            does not apply to any information collected offline or via channels
            other than this website. Consent By using our website, you hereby
            consent to our privacy policy and agree to its terms. Update This
            Privacy Policy was last updated on: Nov 1st, 2019. Should we update,
            amend or make any changes to our privacy policy, those changes will
            be posted here.
          </Text>
        </ScrollView>
      </View>
      {endOfPage && (
        <View
          style={{
            backgroundColor: '#FFFFFF',
            flex: 0.4,
            justifyContent: 'center',
            flexDirection: 'column',
          }}>
          <>
            <View style={{flex: 0.5}}>
              <Button
                style={styles.loginBtn}
                buttonColor="#000000"
                textColor="#ffffff"
                mode="elevated"
                labelStyle={{fontFamily: STANDARD_THAI_FONT_BOLD, fontSize: 15}}
                onPress={() => setPolicyAccepted(true)}>
                ยอมรับและดำเนินการต่อ
              </Button>
            </View>
            <View style={{alignItems: 'center', flex: 0.3}}>
            
              <Link
                style={{fontFamily: STANDARD_THAI_FONT_BOLD}}
                page="POLICY"
                onClick={handleExitApp}>
                ไม่ยอมรับ
              </Link>
            </View>
           
          </>
        </View>
      )}
    </View>
  );
};

export {PolicySrceen};
